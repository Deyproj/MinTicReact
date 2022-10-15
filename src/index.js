//Archivo index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './helloWord';

import './styless.css'

//Renderizacion
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);