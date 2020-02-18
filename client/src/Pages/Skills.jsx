import React from 'react';
import './Skills.scss';
import ai from '../Favorites/icons8-adobe-illustrator-100.png';
import js from '../Favorites/icons8-javascript-100.png';
import html from '../Favorites/icons8-html-5-100.png';
import css from '../Favorites/icons8-css3-100.png';
import sass from '../Favorites/icons8-sass-100.png';
import reactjs from '../Favorites/icons8-react-native-100.png';
import vuejs from '../Favorites/icons8-vue-js-100.png';
import nodejs from '../Favorites/icons8-nodejs-100.png';
import mysql from '../Favorites/icons8-mysql-logo-100.png';
import php from '../Favorites/icons8-php-logo-100.png';
import ps from '../Favorites/icons8-adobe-photoshop-100.png';
import xd from '../Favorites/icons8-adobe-xd-100.png';
const Skills = () => {
  return (
    <section id='skills' className='container'>
      <div className='skills'>
      <h3 className='skills__title'>Skill Set</h3>
      <div className='skills__content'>
        <ul className='skills__list'>
          <li className='skills__items'><img src={js}/></li>
          <li className='skills__items'><img src={html}/></li>
          <li className='skills__items'><img src={css}/></li>
          <li className='skills__items'><img src={sass}/></li>
          <li className='skills__items'><img src={reactjs}/></li>
          <li className='skills__items'><img src={vuejs}/></li>
          <li className='skills__items'><img src={nodejs}/></li>
          <li className='skills__items'><img src={mysql}/></li>
          <li className='skills__items'><img src={php}/></li>
          <li className='skills__items'><img src={ai}/></li>
          <li className='skills__items'><img src={ps}/></li>
          <li className='skills__items'><img src={xd}/></li>
        </ul>
      </div>
      </div>
    </section>
  );
}

export default Skills;
