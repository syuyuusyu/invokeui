// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import InvokeUi from './InvokeUi';


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  // <React.StrictMode>
    <InvokeUi baseUrl = 'https://www.51bqm.com:4012'/>
  // </React.StrictMode>
);

