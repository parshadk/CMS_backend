import express from 'express';
import { getHomepage, updateHomepage } from '../controllers/homepageControllers.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getHomepage);
router.put('/', protect, updateHomepage);

export default router;
