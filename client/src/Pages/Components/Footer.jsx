import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons'
// import {faFacebook,faGithubAlt,faBehanceSquare,faLinkedin,faGoogle,faPinterestSquare} from '@fortawesome/free-brands-svg-icons';
import './Footer.scss'

library.add(fab,far);
export class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
      <div className='footer__content'>
      <ul className='footer__list'>
        <li className='footer__items'><a className='footer__links' href='https://www.facebook.com/cj.oyales' target='_blank' rel="nofollow noopener noreferrer"><FontAwesomeIcon icon={['fab','facebook-f']}/></a></li>
        <li className='footer__items'><a className='footer__links' href='https://github.com/carljustineoyales' target='_blank' rel="nofollow noopener noreferrer"><FontAwesomeIcon icon={['fab','github']}/></a></li>
        <li className='footer__items'><a className='footer__links' href='https://www.behance.net/carloyales' target='_blank' rel="nofollow noopener noreferrer"><FontAwesomeIcon icon={['fab','linkedin-in']}/></a></li>
        <li className='footer__items'><a className='footer__links' href='https://www.behance.net/carloyales' target='_blank' rel="nofollow noopener noreferrer"><FontAwesomeIcon icon={['fab','behance']}/></a></li>
        <li className='footer__items'><a className='footer__links' href='https://www.pinterest.ph/carljustineoyales' target='_blank' rel="nofollow noopener noreferrer"><FontAwesomeIcon icon={['fab','pinterest-p']}/></a></li>
        <li className='footer__items'><a className='footer__links' href='mailto:carljustineoyales@gmail.com' rel="nofollow noopener noreferrer"><FontAwesomeIcon icon={['far','envelope']}/></a></li>
      </ul>
        <p className='footer__copyright'>Designed and Built by Cj Oyales</p>
      </div>
      </footer>
    );
  }
}

export default Footer;
