import http from './http';

const API_URL = '/locations';

export const list = async (query) => {
  try {
    return await http.get(`${API_URL}${query}`);
  } catch (err) {
    return err.response;
  }
};

export const get = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (err) {
    return err.response;
  }
};

export const put = async (id, data) => {
  try {
    return await http.put(`${API_URL}/${id}`, data);
  } catch (err) {
    return err.response;
  }
};

export const create = async (data) => {
  try {
    return await http.post(`${API_URL}`, data);
  } catch (err) {
    return err.response;
  }
};

export default {
  create,
  list,
  get,
  put,
};
