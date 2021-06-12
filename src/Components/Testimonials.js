import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = ({ data }) => {
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

  const fadeRight = {
    hidden: { opacity: 0, x: +300 },
    visible: { opacity: 1, x: 0 }
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 }
  }

  if (data) {
    var testimonials = data.testimonials.map(function (testimonials) {
      return (
        <li key={testimonials.user}>
          <motion.blockquote
             variants={fadeRight}
             initial='hidden'
             animate={controls}
             transition={{delay:1, duration: 2.5 }}
          >
            <p>{testimonials.text}</p>
            <cite>{testimonials.user}</cite>
          </motion.blockquote>
        </li>
      );
    });
  }

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <motion.span
                 variants={fadeLeft}
                 initial='hidden'
                 animate={controls}
                 transition={{delay:1, duration: 2.5 }}
              >FACTS ABOUT ME</motion.span>
            </h1>
          </div>

          <div className="ten columns flex-container" ref={ref}>
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
