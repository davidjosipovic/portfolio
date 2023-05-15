import './../App.css';
import Navbar from './../components/navbar';
import Footer from './../components/footer';
import P1 from '../components/p1';

function Project1() {
  return (
    <div className='Project1'>
    <div className="container">
      <Navbar/>
      <P1/>
      <Footer/>
    </div>
    </div>
  );
}

export default Project1;
