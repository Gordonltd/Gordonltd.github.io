import React from 'react';
import desk from './desk.png';
import OllieHolden from './OllieHolden.jpg'
import './App.css';

function App() {
  return (
      <div className="container">
        <div className="image-container">
          <img className="image" src={desk} alt="Desk" width="100%"/>
          <a className="btn web-projects-btn" href="" target="_blank">
            <div className="btn-show-text">Web Projects</div>
          </a>
          <a className="btn photography-btn" href="https://www.instagram.com/ollie_holden3/" target="_blank">
            <div className="btn-show-text">Photography</div>
          </a>
          <a className="btn programming-btn" href="https://oliverholden3.wixsite.com/gordonsprojects/" target="_blank">
            <div className="btn-show-text">Programming</div>
          </a>
          <a className="btn about-btn" href="https://www.linkedin.com/in/oliver-holden3/" target="_blank">
            <div className="btn-show-text">About</div>
          </a>

          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>

          </div>
        </div>

        <div className="info-text">
          <img className="info-image" src={OllieHolden} alt="Ollie Holden" width="30%"/>
          <h1> Oliver Holden </h1>
          <h2> Graduate Software Developer </h2>
          <p>
            Graduate software developer with a passion for travel, photography and tinkering with DIY
            electronics projects often implementing micro-controllers and smart technology.
          </p>
          <p>
            I am always up for a challenge whether it taking to the skies to get more flying hours under my belt
            (in the hopes of obtaining my Private Pilots License), living halfway across the world in China
            studying, or even just undertaking projects here in the UK. I really do not like to miss an
            opportunity to learn something or explore somewhere new.
          </p>
          <p>
            Project work is one of my strongest skills, with both my Extended Project Qualification (A-Level) and my
            Final Year Project for my degree. Winning recognition and awards for originality and novelty in both
            projects.
          </p>
          <p>
            Problem-solving is a particular skill I have learnt to develop, whether it be by myself, in a team or
            even leading a team, exploring possible solutions to complex problems, although challenging can be fun
            especially when pursuing the most efficient or cost-effective method to achieve the desired result.
          </p>
          <p>
            I have developed a lot more skills through my time in education and graduating from Liverpool University
            with a 2:1 in Avionics Systems and Pilot Studies with a year in China.
          </p>
        </div>

        <div className="info-text">
          <h2> Contact Me: Oliver.Holden3@gmail.com</h2>
        </div>
      </div>
  );
}

export default App;
