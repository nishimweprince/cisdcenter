import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // CHANGE BURGER CLASSES

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("responsive-navigation hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("responsive-navigation visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("responsive-navigation hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <ul className="navbar-navigation">
            <li className="logo">
              <Link to="/" className="logo-images">
                <img
                  src="https://res.cloudinary.com/cisdcenter/image/upload/v1678264002/cisdcenter/logos/favicon_eql2f1.png"
                  alt="cisd-logo"
                  id="cisd-logo"
                />
                <img
                  src="https://res.cloudinary.com/cisdcenter/image/upload/v1678224935/cisdcenter/logos/ur-logo_l5fi9o.png"
                  alt="ur-logo"
                  id="ur-logo"
                />
              </Link>
            </li>

            <li className="navbar-links">
              <Link className="nav-link link-about" to="/about">
                About
              </Link>
              <Link className="nav-link link-contact" to="/contact">
                Contact
              </Link>
              <Link className="nav-link link-donate" to="/donate">
                Contribute
              </Link>
            </li>

            <li className="navbar-cta">
              <Link className="nav-link link-join" to="/join">
                Join Us
              </Link>
            </li>

            <li className="burger-menu" onClick={updateMenu}>
              <span className={burger_class}></span>
              <span className={burger_class}></span>
              <span className={burger_class}></span>
            </li>
          </ul>
        </nav>

        <ul className={menu_class}>
          <li className="navbar-links-responsive">
            <Link className="nav-link link-about" to="/about">
              About
            </Link>
            <Link className="nav-link link-contact" to="/contact">
              Contact
            </Link>
            <Link className="nav-link link-donate" to="/contribute">
              Contribute
            </Link>
          </li>

          <li className="navbar-cta-responsive">
            <Link className="nav-link link-join" to="/join">
              Join Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
