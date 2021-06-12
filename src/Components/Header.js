import React from "react";
import TypeWriter from "react-typewriter";
import VanillaTilt from "vanilla-tilt";
import {motion} from "framer-motion";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }
  //TILT FUNCTION HERE form vanilla-tilt
  const element = document.querySelector("#card");
  VanillaTilt.init(element,
      {max:25,
      speed:400,
    }
    );

  const fadeUp = {
    hidden: {opacity: 0, y:+100},
    visible: {opacity: 1, y:0}
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Facts
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/*BANNNER HERE*/}
      <motion.div className="row banner" id="card"
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition = {{duration: 2}}
      >
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter typing={0.6}>{name ? `Hi there 👋` : null}</TypeWriter>
            <br/>
            <TypeWriter typing={0.8}>{name ? `I'm ${name}.` : null}</TypeWriter>
          </h1>
          <motion.h3
             variants={fadeUp}
             initial = 'hidden'
             animate = 'visible'
             transition = {{duration: 2}}
          >
            Based in {city}. <br/><span>{occupation}</span>.<br/> {description}.
          </motion.h3>
          <hr />
          <motion.ul className="social"
             variants={fadeUp}
             initial = 'hidden'
             animate = 'visible'
             transition = {{duration: 2}}
          >{networks}</motion.ul>
        </div>
      </motion.div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
