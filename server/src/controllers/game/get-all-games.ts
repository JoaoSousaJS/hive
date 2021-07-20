import { Request, Response } from 'express';
import { Game } from '../../database/model/game';

export const getAllGames = async (req:Request, res: Response) => {
  /*
try to find all games, if there is no game it will returns an empty array

*/
  const games = await Game.find({});

  res.send(games);
};
