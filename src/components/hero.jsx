import './hero.css';


function Hero() {
  return (
    <div  className="Hero">
        <div className='HeroText'>
        <h1>Hello there,</h1>
            <h1>My name is <span className='purple'>David</span>,</h1>
            <p>and this is my portfolio!</p>
            <p>I am a web developer based in Croatia who has a strong interest in designing web pages.</p>
        </div>
        <div className=' HeroImg'>
        
            <img id='ProfilePic' src='./DavidJosipovicProfilePicture.jpg' alt='Avatar'/>
        </div>
        
    </div>
  );
}

export default Hero;
