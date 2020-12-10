import { locationService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const location = await locationService.createLocation(req.body);
  res.status(201).json({ success: true, data: location });
});

export const get = catchAsyncErrors(async (req, res, next) => {
  const location = await locationService.getLocationById(req.params.id);
  if (location) {
    return next(
      new ErrorHandler(`Finner ikke kategori med ${req.params.id}`, 404)
    );
  }
  res.status(201).json({ success: true, data: location });
});

export const list = catchAsyncErrors(async (req, res, next) => {
  console.log(req.query);
  const locations = await locationService.listLocations(req.query);
  res.status(200).json({ success: true, data: locations });
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let location = await locationService.getLocationById(req.params.id);
  if (location) {
    return next(
      new ErrorHandler(`Finner ikke kategori med ${req.params.id}`, 404)
    );
  }
  location = await locationService.updateLocation(req.params.id, req.body);
  res.status(200).json({ success: true, data: location });
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let location = await locationService.getLocationById(req.params.id);
  if (location) {
    return next(
      new ErrorHandler(`Finner ikke kategori med ${req.params.id}`, 404)
    );
  }
  location = await locationService.removeLocation(req.params.id);
  res.status(204).json({});
});
