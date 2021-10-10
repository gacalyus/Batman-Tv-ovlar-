import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="navbarNav">
          <h3 className="navBrand">
            <Link to="/">
              <i className="fas fa-video"></i> 
              Tv SHOW BATMAN
            </Link>
          </h3>
          <ul className="navLinks">
            <li className="links__link">
              <Link to="/">HOME</Link>
            </li>
            <li className="links__link">
            <Link to="/about">ABOUT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
