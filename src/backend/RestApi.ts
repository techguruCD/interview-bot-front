import axios from 'axios';

export interface ApiResponse {
    status: boolean;
    message?: string;
    data?: Record<string, any>;
}

export const ApiResponseDefault: ApiResponse = {
    status: false,
    message: 'Unexpected error occured'
};

export const RestApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
export const FormApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

export function setAuthToken(token: string) {
    RestApi.defaults.headers['Authorization'] = `Bearer ${token}`;
    FormApi.defaults.headers['Authorization'] = `Bearer ${token}`;
}