import asyncHandler from 'express-async-handler';
import { registerUser, loginUser, verifyEmail, forgotPassword, resetPassword } from '../service/authService.js';

export const registerUserController = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const user = await registerUser(name, email, password);

    res.status(201).json(user);
});

export const loginUserController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await loginUser(email, password);

    res.json(user);
});

export const verifyEmailController = asyncHandler(async (req, res) => {
    const { token } = req.params;

    await verifyEmail(token);

    res.json({ message: 'Email verified successfully' });
});

export const forgotPasswordController = asyncHandler(async (req, res) => {
    const { email } = req.body;

    await forgotPassword(email);

    res.json({ message: 'Password reset email sent' });
});

export const resetPasswordController = asyncHandler(async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    await resetPassword(token, newPassword);

    res.json({ message: 'Password reset successfully' });
});

