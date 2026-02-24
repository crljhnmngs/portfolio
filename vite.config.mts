import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
    plugins: [
        react(),
        svgr(),
        sitemap({
            hostname: 'https://crljhnmng.dev',
            dynamicRoutes: ['/'],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: 5173,
    },
});
