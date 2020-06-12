//needs significant work and testing

import api from './api-helper';

export const getAllTechs = async (user_id) => {
  const resp = await api.get(`/techniques/${user_id}`);
  return resp.data;
}

export const getOneTech = async (user_id, name) => {
  const resp = await api.get(`/techniques/${user_id}/${name}`);
  return resp.data;
}

export const createTech = async (techData) => {
  const resp = await api.post(`/techniques/`, { technique: techData });
  return resp.data;
}

  export const updateTech = async (id, techData) => {
  const resp = await api.put(`/techniques/${id}`, { technique: techData });
  return resp.data;
}

export const deleteTech = async (id) => {
  const resp = await api.delete(`/techniques/${id}`);
  return resp
}