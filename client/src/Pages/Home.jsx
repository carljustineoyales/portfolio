import React, { Component } from 'react';
import Herobanner from './Herobanner';
import About from './About';
import Experience from './Experience';
import Works from './Works';
import Contact from './Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Skills from './Skills';
import axios from 'axios';
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      header:[]
    }
  }
  
  componentDidMount(){
    window.scrollTo(0,0)
    
  }
  render() {
    return (
      <>
        <Navbar route={this.props}/>
      <main>
        <Herobanner header={this.state.header}/>
        <About/>
        <Skills/>
        <Experience/>
        <Works/>
        <Contact/>
      </main>
      <Footer/>
      </>
    );
  }
}

export default Home;
