import express from 'express';
import { gameRouter } from './routes';

export const app = express();

app.set('trust proxy', true);
app.use(express.json());

app.use(gameRouter);
