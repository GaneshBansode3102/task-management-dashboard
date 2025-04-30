import axios from 'axios';
const BASE_URL = 'http://localhost:5000/tasks';

export const getTasks = () => axios.get(BASE_URL);
export const addTask = (task) => axios.post(BASE_URL, task);
export const updateTask = (id, updates) => axios.patch(`${BASE_URL}/${id}`, updates);
