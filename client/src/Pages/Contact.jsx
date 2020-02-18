import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss'
export class Contact extends Component {
  render() {
    return (
      <section id='contact' className='container'>
        <div className='contact'>
          <h3 className='contact__title'>Contact Me</h3>
          <h1 className='contact__header'>Let's Talk</h1>
          <p className='contact__desc'>Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!</p>
          <a className='contact__btn contact__btn--primary contact__btn--primary--lg' hre='#'>Send Me A Message</a>
        </div>
      </section>
    );
  }
}

export default Contact;
