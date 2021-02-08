
import { Link } from "react-router-dom";

export default function NavbarComonent() {
    

return(
<div className="container">
  <nav className="navbar navbar-expand-lg navbar-light lg-light">
    <a className="navbar-brand" href="#">BOOK FINDER</a>
 
    <ul className="navbar-nav">
      <li className="nav-item">
    <Link className='nav-link' to='/home' >Home</Link>
      </li>


<li className="nav-item">
        <Link className='nav-link' to='/bookstore'>Bookstore</Link>
      </li>


      <li className="nav-item">
        <Link className="nav-link" to='/about'>About</Link>
      </li>
     
      </ul>
      

  </nav>
</div>
);


}