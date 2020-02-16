import React, {Component} from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'; 
import './Archive.scss';
import DevCard from './Components/DevCard';
import DesignCard from './Components/DesignCard';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons';
// import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import axios from 'axios'
library.add(fas);
export class Archive extends Component {

  constructor(props) {
    super(props);
    this.state={
      cards:'dev',
      devCards:[],
      devError:false,
      isLoading:false
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.goBack = this.goBack.bind(this);
  }
  
  componentDidMount(){
    window.scrollTo(0,0)
    axios.get('https://api.github.com/users/carljustineoyales/repos?sort=created')
    .then(res=>{
      this.setState({
        devCards:res.data
      })
    })
    .catch(err=>{
      this.setState({
        devError:true
      })
    });
  }

  goBack(){
    this.props.history.goBack();
}

  handleOnClick = (event) => {
    event.preventDefault();
    this.setState({cards:event.target.value})
  }
  
  render() {
    const {cards,devCards,devError} = this.state
    return ( 
    <> 
    <Navbar route={this.props}/> 
    <main> 
    <section className='container'>
      <div className='archive'>
        <button onClick={this.goBack} className='archive__link'><FontAwesomeIcon  icon={['fas', 'chevron-left']}/> Go Back</button>
        <h3 className='archive__title'>Here's Some of my Work</h3>
        <ul className='archive__list'>
          <li className='archive__items'><button className='archive__btn archive__btn--secondary' onClick={this.handleOnClick} value='dev'>Development</button></li>
          <li className='archive__items'><button className='archive__btn archive__btn--secondary' onClick={this.handleOnClick} value='design'>Design</button></li>
        </ul>
        
            {(cards === 'dev') ? (
              (devError)? (<h1 className='archive__error'>Oppss.. Something went wrong</h1>) : (
                <div className='archive__cards'>
                  {
                    devCards.map(card=>(
                  <DevCard key={card.id} data={card}/>
                ))
                  }
                </div>
                
              )
            ) : (
              <div className='archive__cards'>
                <DesignCard/>
              </div>
            )}
          
        
        </div>
    </section> 
    </main>
      <Footer/> 
      </>
      );
  }
}

export default Archive;
