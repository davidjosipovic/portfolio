import './contact.css';


function Contact() {
  return (
   <div >
    <h2 className='naslov' id='contact'>Kontakt</h2>
    <div className="Contact">
            <h1>Ako me želite kontaktirati, </h1>
            <p>do mene možete doći klikom na jednu od ovih poveznica.</p>
            <ul className='links'>
                <li><a href="https://github.com/davidjosipovic" target='_blank' rel="noopener noreferrer"><img src="./github.svg" alt="github" /></a></li>
                <li><a href="https://www.instagram.com/josipovicdavid/" target='_blank' rel="noopener noreferrer"><img src="./instagram.svg" alt="instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/david-josipovi%C4%87-84a379203/" target='_blank' rel="noopener noreferrer"><img src="./linkedin.svg" alt="linkedin" /></a></li>
            </ul>
            
       
    </div>
    </div>
  );
}

export default Contact;
