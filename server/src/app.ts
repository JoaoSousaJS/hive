import express from 'express';
import cors from 'cors';
import { gameRouter } from './routes';

/*
add cors to the application,
enable body parser,
use gameRouter

*/

export const app = express();

app.use(cors());
app.set('trust proxy', true);
app.use(express.json());

app.use(gameRouter);
