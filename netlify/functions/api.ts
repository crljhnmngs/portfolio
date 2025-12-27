import type { Handler, HandlerResponse } from '@netlify/functions';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'x-api-key': process.env.API_SECRET_KEY,
    },
});

export const handler: Handler = async (event) => {
    // Handle CORS preflight
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
            },
            body: '',
        } as HandlerResponse;
    }

    try {
        const path = event.queryStringParameters?.path || '';

        const { path: _, ...queryParams } = event.queryStringParameters || {};

        const response = await api({
            method: event.httpMethod,
            url: path,
            data: event.body ? JSON.parse(event.body) : undefined,
            params: queryParams,
        });

        return {
            statusCode: response.status,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(response.data),
        } as HandlerResponse;
    } catch (error: any) {
        console.error('API Error:', error.response?.data || error.message);

        return {
            statusCode: error.response?.status || 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                error: error.response?.data || error.message,
            }),
        } as HandlerResponse;
    }
};
