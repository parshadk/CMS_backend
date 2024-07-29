import express from 'express';
import { getHomePageContent, updateHomePageContent } from '../controllers/contentController.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();


router.get('/homepage', getHomePageContent);

router.put('/homepage', auth, updateHomePageContent);

export default router;
