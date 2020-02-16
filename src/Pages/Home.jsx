import React, { Component } from 'react';
import Herobanner from './Herobanner';
import About from './About';
import Experience from './Experience';
import Works from './Works';
import Contact from './Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
export class Home extends Component {
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render() {
    return (
      <>
        <Navbar route={this.props}/>
      <main>
        <Herobanner/>
        <About/>
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
