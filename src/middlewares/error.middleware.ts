import { NextFunction, Request, Response } from 'express';
import { ErrorRequestHandler } from 'express';
import IError from '../interfaces/IError';

const errorMiddleware: ErrorRequestHandler = (
  error: IError,
  _req: Request,
  res: Response,
  _next: NextFunction
  ) => {

  if (error.code) return res.status(error.code).json(error.message);

  console.error(error.message);

  return res.status(500).json(error);
};

export default errorMiddleware;
