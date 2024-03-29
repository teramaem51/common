import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';  // added


export class RequestValidationError extends CustomError {
    // updated Error -> CustomError
  statusCode = 400;
  
  constructor(public errors: ValidationError[]) {
    super('Invalid request paramaters');  // argument added

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map(err => {
      return { message: err.msg, field: err.param };
    });
  }
}
