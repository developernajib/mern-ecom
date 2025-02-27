import express from 'express';
import products from './data/products.js';

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

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product Not Found' });
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
console.log(`App available at http://localhost:${port}`);
