import express from 'express';

export const app = express();

app.set('trust proxy', true);
app.use(express.json());
