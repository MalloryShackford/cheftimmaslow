import React from 'react'
import '../styles/services.css';
const Services = () => {
  return (
    <div id="services" className="services-container">
      <h1 className="services-h1">What We Offer</h1>
        <p className="services-p">Meal Prep and Delivery </p>
          <span className="services-span">-- Enjoy fresh cooked food made daily with locally sourced ingredients designed to your tastes</span>
          <br />
          <br/>
        <p className="services-p">Cooking Classes </p> 
          <span>-- In-home, hands-on cooking classes available now!</span>
          <br />
          <br/>
        <p className="services-p">Special Occasions </p>
          <span>-- A curated menu and commitment to quality guarantee an exclusive experience that will make memories</span>
          <br/>
          <br/>
        <p>For pricing, please contact us <a className="a-link" href="mailto:hello@cheftimmaslow.com">here</a></p>  
      

      
    </div>
  )
}

export default Services
