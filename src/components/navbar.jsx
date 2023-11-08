import './navbar.css';
import { HashLink } from 'react-router-hash-link';
const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -200; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}
function Navbar() {
  return (
    <nav id='navbar' className="navbar sticky-top navbar-expand-lg navbar-white bg-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">DJ</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul  className="navbar-nav">
        <li  className="nav-item">
        <HashLink scroll={el => scrollWithOffset(el)} smooth to="#about" class="nav-link "> <span data-bs-toggle="collapse"  data-bs-target=".navbar-collapse.show" >About me</span></HashLink>
        </li>
        <li className="nav-item">
        <HashLink scroll={el => scrollWithOffset(el)} smooth to="#projects" class="nav-link "><span data-bs-toggle="collapse"  data-bs-target=".navbar-collapse.show" >Projects</span></HashLink>
        </li>
        <li className ="nav-item">
        <HashLink scroll={el => scrollWithOffset(el)} smooth to="#contact" class="nav-link "><span data-bs-toggle="collapse"  data-bs-target=".navbar-collapse.show" >Contact</span></HashLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
