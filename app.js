import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import shoppingRouter from './routes/index.js';

export const app = express();

app.use(cors('*'));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.use('/api/shopping', shoppingRouter);