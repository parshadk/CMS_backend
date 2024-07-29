import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import contentRoutes from './routes/content.js';
import dotenv from 'dotenv';

dotenv.config();

// Connect db
connectDB();

const app = express();

// Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
