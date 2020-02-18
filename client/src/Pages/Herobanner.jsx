import React from 'react';
import './Herobanner.scss'
import {Link} from 'react-router-dom';
import Typewriter from 'typewriter-effect';
const Herobanner = () => {
  return (
    <section id='home' className='container'>
      <div className='herobanner'>

        <h4 className='herobanner__subheader'>Hi! My name is</h4>
        <h1 className='herobanner__header'>Carl Justine Oyales</h1>
        <h3 className='herobanner__typewriter'>
          <Typewriter 
            options={{
            strings: [
              "I'm a Computer Engineer","I'm a Web Graphic Designer","I'm a Front End Developer"
            ],
            autoStart: true,
            loop: true
          }}/>
        </h3>

        <p className='herobanner__desc'>I'm a Computer Engineer based in the Philippines specializing in building <span>(and occasionally designing)</span> websites and applications.</p>
        <div>
          <Link
            to='#'
            className='herobanner__btn herobanner__btn--primary herobanner__btn--primary--lg'>Send Me a Message</Link>

        </div>
      </div>

    </section>
  );
}

export default Herobanner;
