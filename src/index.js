import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import contacts from './data/contacts.json';
import 'modern-normalize/modern-normalize.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={{ contacts }} />
  </React.StrictMode>
);
