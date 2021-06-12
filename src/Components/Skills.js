import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";


function Skills({data}) {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const fade = {
    hidden: { opacity: 0, scale: 0.5},
    visible: { opacity: 1, scale:1}
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 }
  }

  const fadeBar = {
    hidden: {opacity:0,scale:0.5,z:-100},
    visible: {opacity:1, scale:1,z:0}
  }

    if (data) {
        var skillmessage = data.skillmessage;
        var skills = data.skills.map(function (skills) {
          var className = "bar-expand " + skills.name.toLowerCase();
          return (
            <li key={skills.name}>
              <motion.span 
               variants = {fadeBar}
               initial = 'hidden'
               animate = {controls}
               transition = {{delay:1, duration:3}}
              style={{ width: skills.level }} className={className}></motion.span>
              <em><img src={skills.img} alt={skills.name} width='25' height='25'/><span>{skills.name}</span></em>
            </li>
          );
        });
      }

    return (
        <div className="row skill">
        <div className="three columns header-col">
          <motion.h1
            variants = {fadeLeft}
            initial = 'hidden'
            animate = {controls}
            transition = {{duration:1.5}}
          >
            <span>Skills</span>
          </motion.h1>
          <img src="../images/skills.png" alt=""/>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills" ref={ref}>{skills}</ul>
          </div>
        </div>
      </div>
    )
}

export default Skills
