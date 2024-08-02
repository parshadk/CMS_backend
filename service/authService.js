import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import transporter from '../config/nodemailerConfig.js';
import { verificationEmail, resetPasswordEmail } from '../utils/emailTemplate.js';

export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

export const registerUser = async (name, email, password) => {
    const userExists = await User.findOne({ email });

    if (userExists) {
        throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    const token = generateToken(user._id);
    const verificationLink = `${process.env.BASE_URL}/api/auth/verify/${token}`;

    await transporter.sendMail({
        to: user.email,
        subject: 'Email Verification',
        html: verificationEmail(token)
    });

    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        token
    };
};

export const loginUser = async (email, password) => {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        };
    } else {
        throw new Error('Invalid email or password');
    }
};

export const verifyEmail = async (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
        throw new Error('Invalid token');
    }

    user.isVerified = true;
    await user.save();
};

export const forgotPassword = async (email) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    const token = generateToken(user._id);

    await transporter.sendMail({
        to: user.email,
        subject: 'Password Reset',
        html: resetPasswordEmail(token)
    });
};

export const resetPassword = async (token, newPassword) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
        throw new Error('Invalid token');
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();
};
