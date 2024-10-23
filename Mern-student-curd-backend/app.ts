import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import studentRoutes from './routes/student.route';
import './config/db.config';  // Connect to MongoDB

const app = express();
app.use(cors()); // Enable CORS

app.use(express.json());

app.use('/api', studentRoutes);

export default app;
