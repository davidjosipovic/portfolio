import './App.css';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
    </Routes>
  );
}

export default App;
