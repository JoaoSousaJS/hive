import { Request, Response } from 'express';
import { Game } from '../../database/model/game';
import { GameStatus } from '../../database/types/game-status';

export const createGame = async (req:Request, res: Response) => {
  const game = Game.build({
    status: GameStatus.Open,
  });

  await game.save();
  res.status(201).send(game);
};
