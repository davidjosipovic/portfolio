import './contact.css';


function Contact() {
  return (
   <div >
    <h2 className='naslov' id='contact'>Contact</h2>
    <div className="Contact">
            <h1>If you want to reach me, </h1>
            <p>you can get to me by clicking one of these links.</p>
            <ul className='links'>
                <li><a href="https://github.com/davidjosipovic" target='_blank' rel="noopener noreferrer"><img src="./github.svg" alt="github" /></a></li>
                <li><a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer"><img src="./instagram.svg" alt="instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/david-josipovi%C4%87-84a379203/" target='_blank' rel="noopener noreferrer"><img src="./linkedin.svg" alt="linkedin" /></a></li>
            </ul>
            
       
    </div>
    </div>
  );
}

export default Contact;
