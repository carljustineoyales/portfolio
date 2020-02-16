import React, {Component} from 'react';
import './Works.scss';
import WorksCardEven from './Components/WorksCardEven';
import WorksCardOdd from './Components/WorksCardOdd';
import { Link } from 'react-router-dom';

export class Works extends Component {
  render() {
    return (
      <section id='work' className='container'>
        <div className='works'>
          <h3 className='works__title'>Some Things I've built</h3>
          <div className='works__container'>
          <WorksCardOdd/>
          <WorksCardEven/>
          </div> 
          <div className='works__container-btn'>
            <Link className='works__btn works__btn--primary works__btn--primary--lg' to={'/archive'}>Show Archive</Link>
          </div>         
        </div>
        
      </section>
    );
  }
}

export default Works;
