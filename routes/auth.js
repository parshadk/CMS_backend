import express from "express";
import { register, verify, login, forgotPassword, resetPassword } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);

router.get('/verify/:token', verify);

router.post('/login', login);

router.post('/forgot', forgotPassword);

router.post('/reset', resetPassword);

export default router;
