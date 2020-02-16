import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import axios from 'axios';
export class DevCard extends Component {
  constructor(props) {
    super(props);
    this.state={
      topics:[],
      
    }
  }
  

  componentDidMount(){
      axios.get(`https://api.github.com/repos/carljustineoyales/${this.props.data.name}/topics`,{
        headers:{
          'Accept':'application/vnd.github.mercy-preview+json'
        }
      })
      .then(res=>{
        this.setState({
          topics:res.data
        })
      })
      .catch(err=>console.log(err.response))
    
  }

  render() {
    const {name,html_url,description} = this.props.data;
    const {topics} = this.state;
    return (
      <div className='archive__card'>
            <div className='archive__card-header'>
              <span className='archive__card-icon'><FontAwesomeIcon icon={['far', 'folder-open']} /></span>
              <div className='archive__card-links'>
                <a className='archive__card-link' href={html_url} target='_blank' ><FontAwesomeIcon icon={['fas', 'external-link-alt']} /></a>
              </div>
            </div>
            <div className='archive__card-body'>
              <h3 className='archive__card-title'>{name}</h3>
              {(description === null) ? (<p className='archive__card-desc'> </p>) : (<p className='archive__card-desc'>{description}</p>)}
            </div>
            <div className='archive__card-footer'>
              <ul className='archive__card-list'>
                {(topics.length <= 0)? '' :(
                  topics.names.map(topic=>(
                    <li className='archive__card-tags'>{topic}</li>
                  ))
                )}
              </ul>
            </div>
          </div>
    );
  }
}

export default DevCard;
