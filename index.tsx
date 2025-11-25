import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './src/index.css';  // 如果文件在 src 文件夹内

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);