
// This is the file where your entire React app officially begins.


import React from 'react'
import { createRoot } from 'react-dom/client'  // connects React code to the actual web browser DOM
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'  // This is the library that enables page navigation (routing) in React apps
import 'react-toastify/ReactToastify.css'  // react-toastify is a popular library for showing notification popups (toasts), like: “Login successful”, “Item added to cart”, “Error occurred”

createRoot(document.getElementById('root')).render(  // Finds a real HTML element on your page, Attaches React to it, Creates the “root container” where your whole React app will live
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

//<React.StrictMode> is used to to help you find potential problems and bad practices in your code early.



