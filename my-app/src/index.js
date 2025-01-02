import React from 'react'; // Install for Reference and core library
import ReactDOM from 'react-dom/client'; // Implementaion of React App on the Web  

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  // React JSX creates a custom tag so that you can manipulate
  // whic injects the React 
  // React.StrictMode is useful for dev env you can also Remove
  // Remove Strict Mode no chnages occur in the code
  
);


