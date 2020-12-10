import Location from '../models/location.js';
import { ApiFilters } from '../utils/apiFilters';

export const createLocation = async (data) => Location.create(data);

export const getLocationById = async (id) => Location.findById(id);

export const listLocations = async (queryStr) => {
  const filters = new ApiFilters(Location.find(), queryStr).sort();
  console.log(filters);
  const locations = await filters.query.populate('location');
  return {
    results: locations.length,
    data: locations,
  }
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
