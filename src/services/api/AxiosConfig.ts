import axios from 'axios';
import { useAuthStore } from '../../state/AuthStore';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // If you're dealing with authentication tokens stored in cookies
});

// Request interceptor to add tokens or modify requests
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the token from local storage
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error.response);
    // Handle specific error scenarios
    const originalRequest = error.config;

    // Check if the error is due to an expired access token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 3000));
      try {
        console.log("Attempting to refresh token...");
        // Attempt to refresh the token
        const response = await axios.post('/api/auth/refresh-token', {}, { withCredentials: true });

        // Update the access token in the store
        useAuthStore.getState().setToken(response.data.newAccessToken);
        localStorage.setItem("accessToken", response.data.newAccessToken);
        useAuthStore.getState().setUser(response.data.user);

        // Set the new token in headers
        originalRequest.headers['Authorization'] = `Bearer ${response.data.newAccessToken}`;
        console.log("token refreshed successfully : ", response.data.newAccessToken)

        // Retry the original request with the new token
        return axiosInstance(originalRequest);
      } catch (error) {
        console.error('Token refresh failed:', error);
        // Optionally handle other scenarios, like redirecting to login
        useAuthStore.getState().clearUser();
        window.location.href = '/login';
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
