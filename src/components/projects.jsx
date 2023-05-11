import './projects.css';
import { Link } from 'react-router-dom';


function Projects() {
  return (
   
    <div  className="Projects">
        <div className='Project'>
            <h3>Project 1</h3>
            <p>Apartments website</p>
            <Link to="Project1"><img id='project1' src="./Apartman.png" alt="Apartman" /></Link>
        </div>
        <div  className='Project'>
            <h3>Project 2</h3>
            <p>Construction firm website</p>
            <Link to="Project2"><img id='project2' src="./Mir.png" alt="Mir" /></Link>
        </div>
            
       
    </div>
  );
}

export default Projects;
