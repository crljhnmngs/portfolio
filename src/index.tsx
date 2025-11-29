import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/global.css';
import reportWebVitals from './reportWebVitals';
import App from './pages/App';
import './i18n/i18n';
import { QueryProvider } from './providers/QueryProvider';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <QueryProvider>
            <App />
            <Toaster position="top-right" />
        </QueryProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
