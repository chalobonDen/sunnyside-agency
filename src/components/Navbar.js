import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import { NavLink } from 'react-router-dom';
import arrow from '../images/icon-arrow-down.svg';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = (props) => {
  const [manuDropdown, setManuDropdown] = useState(false);
  const navToggler = () => {
    setManuDropdown(manuDropdown === false ? true : false);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />

      <nav className="menu-container">
        <NavLink
          to="/about"
          activeClassName="active"
          activeStyle={{
            color: 'hsl(212, 27%, 19%)',
            fontWeight: 600,
            backgroundColor: 'white',
            paddingRight: '20px',
            paddingLeft: '20px',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'uppercase',
            fontFamily: 'Fraunces',
            fontSize: '14px',
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          activeStyle={{
            color: 'hsl(212, 27%, 19%)',
            fontWeight: 600,
            backgroundColor: 'white',
            paddingRight: '20px',
            paddingLeft: '20px',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'uppercase',
            fontFamily: 'Fraunces',
            fontSize: '14px',
          }}
        >
          Services
        </NavLink>
        <NavLink
          to="/projects"
          activeStyle={{
            color: 'hsl(212, 27%, 19%)',
            fontWeight: 600,
            backgroundColor: 'white',
            paddingRight: '20px',
            paddingLeft: '20px',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'uppercase',
            fontFamily: 'Fraunces',
            fontSize: '14px',
          }}
        >
          Projects
        </NavLink>
        <NavLink
          exact
          to="/"
          activeStyle={{
            color: 'hsl(212, 27%, 19%)',
            fontWeight: 600,
            backgroundColor: 'white',
            paddingRight: '20px',
            paddingLeft: '20px',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'uppercase',
            fontFamily: 'Fraunces',
            fontSize: '14px',
          }}
        >
          Contact
        </NavLink>
      </nav>

      <div className="burger">
        <button onClick={navToggler}>
          <FaBars style={{ width: '1.5rem', height: '1.5rem' }} />
        </button>
      </div>

      <header>
        <p>We are creatives</p>
        <img src={arrow} alt="" className="arrow" />
        <div className="header-img"></div>
      </header>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
