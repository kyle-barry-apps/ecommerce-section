import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LightboxProvider } from './contexts/Lightbox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<LightboxProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</LightboxProvider>
);

