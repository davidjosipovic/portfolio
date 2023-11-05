import './projects.css';
import { Link } from 'react-router-dom';
function Projects() {
  return (
    <div className="Projects">
      <div className='Project'>
        <div className='flex'>
          <h3>Project 1</h3>
          <a  href="https://github.com/davidjosipovic/myGameList" target='_blank' rel="noopener noreferrer"><img className='gh' src="./github.svg" alt="github" /></a>
        </div>
        <p>myGameList website</p>
        <a href="https://mygamelistdj.vercel.app/" target='_blank' rel="noopener noreferrer"><img id='project1' src="./myGameList.png" alt="Apartman" /></a>



      </div>
      <div className='Project'>
        <div className='flex'>
          <h3>Project 2</h3>
          <a  href="https://github.com/davidjosipovic/mir-v2" target='_blank' rel="noopener noreferrer"><img className='gh' src="./github.svg" alt="github" /></a>
        </div>
        <p>Construction firm website</p>
        <a href="https://www.mirgradjevinarstvo.com/" target='_blank' rel="noopener noreferrer"><img id='project2' src="./Mir.png" alt="Mir" /></a>
      </div>

    </div>
  );
}

export default Projects;
