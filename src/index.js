import React from 'react';
import { App } from './App';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('crypto-module');

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App tab="home" />
  </React.StrictMode>
);
