import jwt from 'jsonwebtoken';
import { userService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from './catchAsync.js';

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  let token;
  if (req.cookies?.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return next(new ErrorHandler('Logg inn', 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userService.getUserById(decoded.id);

  if (!user) {
    return next(new ErrorHandler('Finner ikke brukeren', 404));
  }

  req.user = user;
  next();
});

export const isAuthorized = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return next(new ErrorHandler('Du har ikke tilgang', 403));
  }
  next();
};
