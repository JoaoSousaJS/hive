import { Request, Response } from 'express';

export const createGame = (req:Request, res: Response) => {
  res.send({ true: 'true' });
};
