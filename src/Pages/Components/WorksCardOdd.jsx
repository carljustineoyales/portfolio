import React, { Component } from 'react';
import image1 from './f3eba587597025.5dbcd5b42adae.png'

export class WorksCardOdd extends Component {
  render() {
    return (
      <div className='works__grid works__grid--odd'>
      <div className='works__image'>
        <div className='works__overlay'>
        <img src={image1} />
        </div>
      </div>
      <div className='works__details'>
        <h3 className='works__details-featured'>Featured Project</h3>
        <h2 className='works__details-title'>Title</h2>
        <p className='works__details-desc'>Initial web redesign for the MacMall Online Store. Redesigned the navigation, "On Sale" Counter, featured items, side navigation, categories bar and a sample item cards page</p>
        <ul className='works__details-list'>
          <li className='works__details-tags'>TAG1</li>
          <li className='works__details-tags'>TAG2</li>
        </ul>
        <ul className='works__details-list'>
        <li className='works__details-links'><a className='works__link' href='#'>Link1</a></li>
          <li className='works__details-links'><a className='works__link' href='#'>Link2</a></li>
        </ul>
      </div>
    </div>
    );
  }
}

export default WorksCardOdd;
