export const verificationEmail = (token) => {
    return `
        <h1>Email Verification</h1>
        <p>Please verify your email by clicking the link below:</p>
        <a href="${process.env.BASE_URL}/api/auth/verify/${token}">Verify Email</a>
    `;
};

export const resetPasswordEmail = (token) => {
    return `
        <h1>Password Reset</h1>
        <p>Please reset your password by clicking the link below:</p>
        <a href="${process.env.BASE_URL}/reset-password/${token}">Reset Password</a>
    `;
};
