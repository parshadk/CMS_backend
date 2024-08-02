import express from 'express';
import { getSolution, updateSolution } from '../controllers/solutionControllers.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getSolution);
router.put('/', protect, updateSolution);

export default router;
