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
      // updated RequestValidationError -> CustomError
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  // if (err instanceof DatabaseConnectionError) {
  //   return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  // }

  res.status(400).send({
    erros: [{ message: 'Something went wrong' }]
  });
};
