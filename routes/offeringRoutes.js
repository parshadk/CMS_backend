import express from 'express';
import { getOffering, updateOffering } from '../controllers/offeringControllers.js';
import { protect } from '../middlewares/authMiddleware.js';


const router = express.Router();

router.get('/', getOffering);
router.put('/', protect, updateOffering);

export default router;
