import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import './index.css'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
serviceWorkerRegistration.register('service-worker.js');