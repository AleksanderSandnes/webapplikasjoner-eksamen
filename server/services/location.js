import Location from '../models/location.js';

export const createLocation = async (data) => Location.create(data);

export const getLocationById = async (id) => Location.findById(id);

export const listLocations = async () => Location.find();

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
