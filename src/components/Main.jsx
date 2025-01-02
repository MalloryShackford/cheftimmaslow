import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import headshot from '../assets/headshot.png'
import bgImg from '../assets/personalChef.png'
import '../styles/main.css';
const Main = () => {
  return (
    <div className="bg-container">
      <nav>
            <ul>
                <li className="nav-li"><a href="#home">Home</a></li>
                <li className="nav-li"><a href="#about">About</a></li>
                <img className="headshot-img" src={headshot} alt="headshot" width="150" />
                <img className="nav-img" src={headshot} alt="headshot" width="150" />
                <li className="nav-li"><a href="#services">Services</a></li>
                <li className="nav-li"><a href="#contact">Contact</a></li>
          </ul>
      </nav>
      <div className="title-container">
            <h2>Chef Tim Maslow</h2>
      </div>
      <div className="bg-img">
        <img src={bgImg} alt="backgroundImg"/>
      </div>
      <About />
      <Services />
      <Contact />
      <footer>
        <div className="footer-container">
          <a href="mailto:cheftimmaslow@gmail.com">cheftimmaslow@gmail.com</a>
          <p className="footer-p">&copy; 2024 | Made with &hearts; by <a href="https://www.mallorybae.com">Mallory Shackford</a></p>
        </div>
      </footer>
    </div>
  )
}

export default Main
