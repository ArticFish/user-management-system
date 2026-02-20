import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const listUsers = () => axios.get(API_URL);

export const createUser = (user) => axios.post(API_URL, user);

export const getUser = (userId) => axios.get(`${API_URL}/${userId}`);

export const updateUser = (userId, user) => axios.put(`${API_URL}/${userId}`, user);

export const deleteUser = (userId) => axios.delete(`${API_URL}/${userId}`);
