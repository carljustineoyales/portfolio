import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';
import logo from './logo.svg';

export class Navbar extends Component {
  render() {
    const {match:{path}} = this.props.route
    return (
      <header>
        <nav className='nav'>
          <Link className='nav__logo' to={'/'}><img src={logo}/></Link>
          {(path !== '/') ? '' : (
            <ul className='nav__list'>
            <li className='nav__item'>
              <a className='nav__links' href='#about'>About</a>
            </li>
            <li className='nav__item'>
              <a className='nav__links' href='#experience'>Experience</a>
            </li>
            <li className='nav__item'>
              <a className='nav__links' href='#work'>Work</a>
            </li>
            <li className='nav__item'>
              <a className='nav__links' href='#contact'>Contact</a>
            </li>
            <li className='nav__item'>
              <a className='nav__btn nav__btn--primary' href='#'>Resume</a>
            </li>
            <li className='nav__item'>
              <a className='nav__btn nav__btn--primary' href='https://www.fiverr.com/carloyales?up_rollout=true' target='_blank' rel="nofollow noopener noreferrer">Fiverr</a>
            </li>
          </ul>
          )}
        </nav>
      </header>
    );
  }
}

export default Navbar;



