import express from 'express';
import { registerUserController, loginUserController, verifyEmailController, forgotPasswordController, resetPasswordController } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUserController);
router.post('/login', loginUserController);
router.get('/verify/:token', verifyEmailController);
router.post('/forgot-password', forgotPasswordController);
router.post('/reset-password/:token', resetPasswordController);

export default router;
