import express from 'express';
import { createGame } from '../controllers/game/create-game';

export const gameRouter = express.Router();

gameRouter.post('/api/game', createGame);
