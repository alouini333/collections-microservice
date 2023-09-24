import { NextFunction, Request, Response } from 'express';

// Due to time pressure the categories will be hardcoded
export const getCollections = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const collections = [
        {
            id: 1,
            name: 'colleciton 1'
        }
    ];
    res.status(200).json({
      status: 'success',
      data: collections
    });
  } catch (err) {
    next(err);
  }
};