import './navbar.css';

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


function Navbar() {
  return (
    <nav id='navbar' className="navbar navbar-expand-lg navbar-white bg-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">DJ</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul  className="navbar-nav">
        <li  className="nav-item">
          <a  href="#about"  class="nav-link " ><span data-bs-toggle="collapse"  data-bs-target=".navbar-collapse.show" >About me</span></a>
        </li>
        <li className="nav-item">
          <a  class="nav-link" href="#projects"><span data-bs-toggle="collapse"  data-bs-target=".navbar-collapse.show" >Projects</span></a>
        </li>
        <li className ="nav-item">
          <a  class="nav-link" href="#contact"><span data-bs-toggle="collapse"  data-bs-target=".navbar-collapse.show" >Contact</span></a>
        </li>
        <li className="nav-item">
          <a  class="nav-link" href="#a"><span data-bs-toggle="collapse"  data-bs-target=".navbar-collapse.show" >CV</span></a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
