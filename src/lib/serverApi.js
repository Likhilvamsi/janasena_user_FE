import axios from "axios";

const serverApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // needed if using cookies/JWT
});

// Optional: request interceptor
serverApi.interceptors.request.use(
  config => {
    // Example: attach token if needed
    // const token = cookies().get("token")?.value
    // if (token) config.headers.Authorization = `Bearer ${token}`
    return config;
  },
  error => Promise.reject(error)
);

// Optional: response interceptor
serverApi.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default serverApi;
