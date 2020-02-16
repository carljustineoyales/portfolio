import React, { Component } from 'react';
import './Footer.scss'
export class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
      <div className='footer__content'>
      <ul className='footer__list'>
        <li className='footer__items'><a className='footer__links' href='#'>Facebook</a></li>
        <li className='footer__items'><a className='footer__links' href='#'>Github</a></li>
        <li className='footer__items'><a className='footer__links' href='#'>Behance</a></li>
        <li className='footer__items'><a className='footer__links' href='#'>Pinterest</a></li>
        <li className='footer__items'><a className='footer__links' href='#'>Fiverr</a></li>
        <li className='footer__items'><a className='footer__links' href='#'>Email</a></li>
      </ul>
        <p className='footer__copyright'>Designed and Built by Cj Oyales</p>
      </div>
     
      </footer>
    );
  }
}

export default Footer;
