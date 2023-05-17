import './App.css';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
  return (
    <div className='App'>
    <div className="container">
      <Navbar/>
      <Hero/>
      <h2 >O meni</h2>
      <About/>
      <h2 className='pTitle'>Projekti</h2>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
