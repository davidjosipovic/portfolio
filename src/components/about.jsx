import './about.css';


function About() {
  return (
   
    <div  className="About">
       
            <p>Kao full stack web developer, sposoban sam raditi na front-end i back-end web razvoju koristeći razne programske jezike i alate kao što su <span className='purple-light'>HTML, CSS, JavaScript, PHP</span> i <span className='purple-light'>React</span>.</p>
            <p>Stalno tražim nove izazove i prilike kako bih unaprijedio svoje vještine te s nestrpljenjem očekujem što budućnost donosi svijetu web razvoja.</p>
            <p>Još neke tehnologije s kojima sam upoznat:<ul className='purple-light'>
            <div id='projects'></div>
                <li>Bootstrap</li>
                <li>MySQL</li>
                <li>Django</li>
                <li>NodeJS</li>
                
            </ul></p>
            
            
    </div>
  );
}

export default About;
