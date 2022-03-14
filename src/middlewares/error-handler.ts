import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../errors/custom-error';  // added
// import { RequestValidationError } from '../errors/request-validation-error';
// import { DatabaseConnectionError } from '../errors/database-connection-error';


export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.error(err);
  res.status(400).send({
    erros: [{ message: 'Something went wrong' }]
  });
};
