import './hero.css';


function Hero() {
  return (
    <div  className="Hero">
        <div className='HeroText'>
            <h1>Ćao,</h1>
            <h1>Moje ime je <span className='purple'>David</span>,</h1>
            <p>i ovo je moj portfolio!</p>
            <p>Student sam informatike i jako me zanima dizajniranje web stranica.</p>
            
        </div>
        <div className=' HeroImg'>
        
            <img id='ProfilePic' src='./DavidJosipovicProfilePicture.jpg' alt='Avatar'/>
        </div>
        
    </div>
  );
}

export default Hero;
