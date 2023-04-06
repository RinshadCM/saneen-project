import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  return (
    <nav className="navbar">
      <Link
        to="/"
        className={activeLink === '/' ? 'active-link' : ''}
        onClick={() => handleLinkClick('/')}
      >
        <img
          src="https://i.postimg.cc/m2Rt150T/home.png"
          alt="Home"
          className="navbar-icon"
          
        />
        
      </Link>
      <Link
        to="/Cart"
        className={activeLink === '/Cart' ? 'active-link' : ''}
        onClick={() => handleLinkClick('/Cart')}
      >
        <img
          src="https://i.postimg.cc/QMhmbswM/cart3.png"
          alt="cart"
          className="navbar-icon"
          
        />
                

      </Link>
      <Link
        to="/dispatch"
        className={activeLink === '/dispatch' ? 'active-link' : ''}
        onClick={() => handleLinkClick('/dispatch')}
      >
        <img
          src="https://i.postimg.cc/Dzmsn9Py/dispatch.png"
          alt="Dispatch"
          className="navbar-icon"
        />
          

      </Link>
      <Link
        to="/Notification"
        className={activeLink === '/Notification' ? 'active-link' : ''}
        onClick={() => handleLinkClick('/Notification')}
      >
        <img
          src="https://i.postimg.cc/cLkg9DGq/notification.png"
          alt="Notifications"
          className="navbar-icon"
        />
      </Link>
    

    </nav>
  );
};

export default Navbar;
