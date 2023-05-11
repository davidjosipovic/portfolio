import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
    <Routes>
    <Route path="/" element={<App />}/>
    <Route path="Project1" element={<Project1 />} />
    <Route path="Project2" element={<Project2 />} />
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
