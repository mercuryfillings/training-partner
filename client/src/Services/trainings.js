//needs significant work and testing

import api from './api-helper';

export const getAllTrainings = async (user_id) => {
  const resp = await api.get(`/training_sessions/${user_id}`);
  return resp.data;
}

export const getOneTraining = async (user_id, id) => {
  const resp = await api.get(`/training_sessions/${user_id}/${id}`);
  return resp.data;
}

export const createTraining = async (trainingData) => {
  const resp = await api.post('/', { training_session: trainingData });
  return resp.data;
}

export const updateTech = async (user_id, id, trainingData) => {
  const resp = await api.put(`/foods/${id}`, { training_session: trainingData });
  return resp.data;
}

export const deleteTech = async (user_id, id) => {
  const resp = await api.delete(`training_sessions/${user_id}/${id}`);
  return resp
}