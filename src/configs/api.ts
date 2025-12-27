import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'x-api-key': import.meta.env.VITE_API_SECRET_KEY,
    },
});

if (import.meta.env.DEV) {
    // Request interceptor
    api.interceptors.request.use(
        (config) => {
            console.log(
                'API Request:',
                config.method?.toUpperCase(),
                config.url
            );
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // Response interceptor for error handling
    api.interceptors.response.use(
        (response) => response,
        (error) => {
            console.error('API Error:', error.response?.data || error.message);
            return Promise.reject(error);
        }
    );
}
