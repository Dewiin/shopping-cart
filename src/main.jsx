import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { AppRoutes } from './App.jsx';
import { App } from "./App"
import './index.css'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

