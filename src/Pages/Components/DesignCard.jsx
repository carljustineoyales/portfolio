import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import {far} from '@fortawesome/free-regular-svg-icons';
import {faFolderOpen,faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
library.add(far,faFolderOpen,faExternalLinkAlt);
export class DesignCard extends Component {
  render() {
    return (
      <div className='archive__card'>
            <div className='archive__card-header'>
              <span className='archive__card-icon'><FontAwesomeIcon icon={['far', 'folder-open']}/></span>
              <a className='archive__card-link' href='#'><FontAwesomeIcon icon={['fas', 'external-link-alt']} /></a>
            </div>
            <div className='archive__card-body'>
              <h3 className='archive__card-title'>Portfolio MoodBoard</h3>
              <p className='archive__card-desc'>A moodboard presenting my portfolio v2 layout</p>
            </div>
            <div className='archive__card-footer'>
              <ul className='archive__card-list'>
                <li className='archive__card-tags'>Adobe XD</li>
                <li className='archive__card-tags'>Adobe Illustrator</li>
              </ul>
            </div>
          </div>
    );
  }
}

export default DesignCard;
