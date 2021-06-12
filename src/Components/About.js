import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
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

  const fadeRight = {
    hidden: { opacity: 0, x: +300 },
    visible: { opacity: 1, x: 0 }
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <motion.img
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 360, 360, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              loop: Infinity,
              repeatDelay: 4
            }}
            className="profile-pic"
            src={profilepic}
            alt="Sonny's Profile Pic"
          />
        </div>
        <div className="nine columns main-col" ref={ref}>
          <h2>About Me</h2>

          <motion.p
            variants={fadeRight}
            initial='hidden'
            animate={controls}
            transition={{delay:1, duration: 1.5 }}
          >{bio}</motion.p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <motion.p
                variants={fadeLeft}
                initial='hidden'
                animate={controls}
                transition={{delay:1, duration: 1.5 }}
                className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </motion.p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
