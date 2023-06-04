import Navbar from './../components/navbar.jsx';
import Hero from './../components/hero.jsx';
import About from './../components/about';
import Projects from './../components/projects';
import Contact from './../components/contact';
import Footer from './../components/footer';




function Home() {
  return (
    <div className='Home'>
    <div className="container">
      <Navbar/>
      <Hero/>
      <h2 id='about'>O meni</h2>
      <About/>
      <h2 id='projects' className='pTitle'>Projekti</h2>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    </div>
  );
}

export default Home;
