import React from 'react';
import {Link} from 'react-router-dom';
import './About.scss'
import image from '../about-image.jpg'
const About = () => {
  return (
    <section id='about' className='container'>
      <div className='about'>
        <h3 className='about__title'>About Me</h3>
        <div className='about__content'>
          <div className='about__img'>
            <div className='about__overlay'>
            <img src={image}/>
            </div>
          </div>
          <div className='about__desc'>

            <p className='about__paragraph'>Hello! I'm CJ, a computer engineer based in the
              Philippines who enjoys building things that live on the internet. I develop
              websites and web apps that provide intuitive, great user experience and user
              interface.</p>
            <p className='about__paragraph'>I joined the development team at <a className='about__link' href='#'>DecodeTokyo</a> where I work on a wide variety of interesting and meaningful projects.</p>
            <p className='about__paragraph'>Here are a few technologies I've been working with recently:</p>
            <ul className='about__list'>
              <li className='about__items'>JavaScript (ES6+)</li>
              <li className='about__items'>HTML & (S)CSS</li>
              <li className='about__items'>ReactJs</li>
              <li className='about__items'>VueJs</li>
              <li className='about__items'>NodeJs</li>
              <li className='about__items'>ExpressJs</li>
              <li className='about__items'>MySql</li>
              <li className='about__items'>PHP</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
