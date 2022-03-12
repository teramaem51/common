import { CustomError } from "./custom-error";  // added


export class DatabaseConnectionError extends CustomError {
    // updated Error -> CustomError
  statusCode = 500;
  reason = 'Error connecting to database';
  
  constructor() {
    super('Error connecting to database');  // argument added

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
