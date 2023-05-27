import './projects.css';
import { Link } from 'react-router-dom';


function Projects() {
  return (
   
    <div  className="Projects">
        <div className='Project'>
            <h3>Projekt 1</h3>
            <p>Web stranica za apartmane</p>
            <Link to="/project1"><img id='project1' src="./Apartman.png" alt="Apartman" /></Link>
        </div>
        <div  className='Project'>
            <h3>Projekt 2</h3>
            <p>Web stranica građevinske firme</p>
            <Link to="/project2"><img id='project2' src="./Mir.png" alt="Mir" /></Link>
        </div>
            
       
    </div>
  );
}

export default Projects;
