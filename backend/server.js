import express from 'express';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

import connectDB from './config/db.js';
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from E-commerce server!');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
console.log(`App available at http://localhost:${port}`);
