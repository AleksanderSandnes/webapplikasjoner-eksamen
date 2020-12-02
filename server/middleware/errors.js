import ErrorHandler from '../utils/errorHandler.js';

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    error.message = err.message;

    if (err.code === 'EBADCSRFTOKEN') {
      const message = `Ikke gyldig token`;
      error = new ErrorHandler(message, 403);
    }

    if (err.name === 'CastError') {
      const message = `Fant ikke ressursen du ser etter. Invalid ${err.path}`;
      error = new ErrorHandler(message, 404);
    }

    if (err.name === 'ValidationError') {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 400);
    }

    if (err.code === 11000) {
      const message = `Duplikat av ${Object.keys(err.keyValue)}`;
      error = new ErrorHandler(message, 400);
    }

    if (err.name === 'JsonWebTokenError') {
      const message = 'JSON Web Token er ugyldig!';
      error = new ErrorHandler(message, 500);
    }

    if (err.name === 'TokenExpiredError') {
      const message = 'JSON Web token har utløpt';
      error = new ErrorHandler(message, 500);
    }

    res.status(error.statusCode).json({
      success: false,
      message: error.message || 'Internal Server Error',
    });
  }
};
