import React, { Component } from 'react'
import { Element } from 'react-scroll'
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VenueNFO from './components/venueNFO'
import Highlight from './components/highlights'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header_footer/Footer'


class App extends Component {
  render() {
    return (
      <div className='App' style={{height:'1500px',background:'cornflowerblue'}}>
        <Header />

        <Element name='featured'>
            <Featured />  
        </Element>
        
        <Element name='venue_nfo'>
            <VenueNFO />
        </Element>

        <Element name='highlights'>
            <Highlight />
        </Element>
        
        <Element name='pricing'>
            <Pricing /> 
        </Element>
        
        <Element name='location'>
            <Location />
        </Element>
        
        <Footer />
      </div>
    )
  }
}

export default App