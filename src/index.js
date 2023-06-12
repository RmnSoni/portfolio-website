import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserRefProvider } from './context/RefContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserRefProvider>
      <App />
    </UserRefProvider>
  </React.StrictMode>
);

