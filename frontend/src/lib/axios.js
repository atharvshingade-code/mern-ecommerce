import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? "https://mern-ecommerce-backend-8cl8.onrender.com" : "/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
