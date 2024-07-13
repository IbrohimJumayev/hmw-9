import axios from "axios";
export const api_url = "http://localhost:3000";

const api = axios.create({
  baseURL: `${api_url}`,
});

export default api

//https://project-server-lf51.onrender.com