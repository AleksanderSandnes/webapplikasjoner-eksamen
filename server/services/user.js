import Event from '../models/event.js';
import User from '../models/user.js';

export const getUserById = async (id) => User.findById(id);

export const getUserByEmail = async (email, usePassword) => {
  if (usePassword) {
    return User.findOne(email).select('+password');
  }
  return User.findOne(email);
};

export const createUser = async (data) => User.create(data);

export const listUserEvents = async (id) => {
  if (id) {
    const events = await Event.find({ user: id }).populate('user', 'email');
    return events;
  }
};
