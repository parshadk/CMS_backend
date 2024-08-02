import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import homepageRoutes from './routes/homepageRoutes.js';
import offeringRoutes from './routes/offeringRoutes.js';
import solutionRoutes from './routes/solutionRoutes.js';
import workRoutes from './routes/workRoutes.js';
import authRoutes from './routes/authRoutes.js'; 
dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/homepage', homepageRoutes);
app.use('/api/offering', offeringRoutes);
app.use('/api/solution', solutionRoutes);
app.use('/api/work', workRoutes);
app.use('/api/auth', authRoutes); 

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

