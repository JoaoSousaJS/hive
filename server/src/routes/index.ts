import express from 'express';
import { createGame, getAllGames } from '../controllers/game';

export const gameRouter = express.Router();

/*
expose controllers and create routes

*/

gameRouter.post('/api/game', createGame);
gameRouter.get('/api/game', getAllGames);
