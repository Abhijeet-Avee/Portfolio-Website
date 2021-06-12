import React, { useEffect } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Work from "./Work";

const Resume = ({ data }) => {

  return (
    <section id="resume">  
      <Education data={data}/>     
      <Work data={data}/>
      <Skills data={data}/>
    </section>
  );
};

export default Resume;
