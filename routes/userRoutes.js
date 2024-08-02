import express from 'express';
import { getUserProfile, updateUserProfile, deleteUser, getUsers } from '../controllers/userController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();


router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

//(admin only)
router.route('/')
    .get(protect, admin, getUsers);

//(admin only)
router.route('/:id')
    .delete(protect, admin, deleteUser);

export default router;
