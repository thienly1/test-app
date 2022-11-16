import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import UseEffectExample from './hooks/UseEffectExample';
import PersonForm from './validation/PersonForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseEffectExample/> 
  </React.StrictMode>
);


