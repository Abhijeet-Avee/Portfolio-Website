import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";


function Work({ data }) {
    if (data) {
        var work = data.work.map(function (work) {
            return (
                <div key={work.company}>
                    <h3>{work.company}</h3>
                    <p className="info">
                        {work.title}
                        <span>&bull;</span> <em className="date">{work.years}</em>
                    </p>
                    <p>{work.description}</p>
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
        <div className="row work">
        <div className="three columns header-col">
          <motion.h1
             variants = {fadeLeft}
             initial = 'hidden'
             animate = {controls}
             transition = {{duration:1.5}}
          >
            <span>Work</span>
          </motion.h1>
          <img src="../images/Work.png" alt=""/>
        </div>
        <motion.div ref={ref}
        variants = {fade}
        initial = {{opacity:0}}
        animate = {controls}
        transition = {{duration:2}}
        className="nine columns main-col">{work}</motion.div>
      </div>
    )
}

export default Work;