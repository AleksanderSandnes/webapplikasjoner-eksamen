import { userService } from '../services/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const event = await userService.createUser(req.body);
  res.status(201).json(event);
});

export const listEvents = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.user;
  const events = await userService.listUserEvents(id);
  res.status(200).json(events);
});
