import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Education({data}) {
    
        if(data) {
            var education = data.education.map(function (education) {
                return (
                  <div key={education.school}>
                    <h3>{education.school}</h3>
                    <p className="info">
                      {education.degree} <span>&bull;</span>
                      <em className="date">{education.graduated}</em>
                    </p>
                    <p>{education.description}</p>
                  </div>
                );
              });
        }

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

    return (
        <div className="row education">
        <div className="three columns header-col">
          <motion.h1
            variants = {fadeLeft}
            initial = 'hidden'
            animate = {controls}
            transition = {{duration:1.5}}
          >
            <span>Education</span>
          </motion.h1>
          <img src="../images/education.png" alt=""/>
        </div>

        <div className="nine columns main-col">
          <div className="row item" ref={ref}>
            <motion.div
            variants = {fade}
            initial = {{opacity:0}}
            animate = {controls}
            transition = {{duration:2}}
            className="twelve columns">{education}</motion.div>
          </div>
        </div>
      </div>
    )
}

export default Education;
