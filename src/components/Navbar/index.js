import React from 'react';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Manohar Reddy</div>
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home" className="navbar-link">Home</a></li>
        <li className="navbar-item"><a href="#projects" className="navbar-link">Projects</a></li>
        <li className="navbar-item"><a href="#footer" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;