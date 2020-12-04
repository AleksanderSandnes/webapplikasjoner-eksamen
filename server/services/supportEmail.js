import SupportEmail from '../models/supportEmail.js';

export const createSupportEmail = async (data) => SupportEmail.create(data);

export const getSupportEmailById = async (id) => SupportEmail.findById(id);

export const listSupportEmails = async () => SupportEmail.find();

export const removeSupportEmail = async (id) => {
  const supportEmail = await SupportEmail.findById(id);
  supportEmail.remove();
};
