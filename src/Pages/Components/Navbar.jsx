import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';
import logo from './logo.svg';

const Navbar = () => {
  return (
    <header>
      <nav className='nav'>
        <Link className='nav__logo' to={'#'}><img src={logo}/></Link>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link className='nav__links' to={'#'}>About</Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__links' to={'#'}>Experience</Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__links' to={'#'}>Work</Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__links' to={'#'}>Contact</Link>
          </li>
          <li className='nav__item'>
            <a className='nav__btn nav__btn--primary' href='#'>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
