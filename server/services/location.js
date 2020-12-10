import Location from '../models/location.js';
import { ApiFilters } from '../utils/apiFilters';

export const createLocation = async (data) => Location.create(data);

export const getLocationById = async (id) => Location.findById(id);

export const listLocations = async (queryStr) => {
  const filters = ApiFilters(Location.find(), queryStr).sort();
  const locations = await filters.query.populate();
};

export const updateLocation = async (id, data) =>
  Location.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removeLocation = async (id) => {
  const location = await Location.findById(id);
  location.remove();
};
