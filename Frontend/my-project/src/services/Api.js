import axios from "axios";

// Create Axios instance with backend base URL
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Automatically attach JWT token to every request
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers["Authorization"] = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default API;
