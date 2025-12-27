import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.DEV
        ? 'http://localhost:8888/.netlify/functions'
        : '/.netlify/functions',
});

export const apiCall = {
    get: <T = unknown>(path: string, params?: Record<string, unknown>) =>
        api.get<T>(`/api?path=${path}`, { params }),

    post: <T = unknown>(path: string, data?: Record<string, unknown>) =>
        api.post<T>(`/api?path=${path}`, data),

    put: <T = unknown>(path: string, data?: Record<string, unknown>) =>
        api.put<T>(`/api?path=${path}`, data),

    delete: <T = unknown>(path: string) => api.delete<T>(`/api?path=${path}`),

    patch: <T = unknown>(path: string, data?: Record<string, unknown>) =>
        api.patch<T>(`/api?path=${path}`, data),
};

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
