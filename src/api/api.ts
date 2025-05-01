import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
});

// api.interceptors.request.use((req) => {

//     const token = localStorage.getItem('access_token');

//     req.headers['Authorization'] = `Bearer ${token}`;
//     return api(req);
// })


api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Access token expired
        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            !originalRequest.url.includes('/auth/refresh')
        ) {
            originalRequest._retry = true;
            try {
                const { data } = await api.post('/auth/refresh');

                localStorage.setItem('access_token', data.access_token);

                originalRequest.headers['Authorization'] = `Bearer ${data.access_token}`;
                return api(originalRequest);
            } catch (refreshError) {

                console.error('Refresh token expired or invalid');
                window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);


export default api;
