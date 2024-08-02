import express from 'express';
import { getWork, updateWork } from '../controllers/workControllers.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getWork);
router.put('/', protect, updateWork);

export default router;
