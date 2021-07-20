import { Request, Response } from 'express';
import { Game } from '../../database/model/game';

export const createGame = async (req:Request, res: Response) => {
  /*
get game result from the body

*/
  const { gameResult } = req.body;

  /*
custom function to make typescript work with mongoose

*/
  const game = Game.build({
    won: gameResult,
  });

  /*
save the game and return it

*/

  await game.save();
  res.status(201).send(game);
};
