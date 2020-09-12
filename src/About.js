import React from "react";
import Common from "./Common";
import web from "../src/Images/stulep.jpg";

const About = () => {
  return (
    <>
      <Common
        name="Wecome to About Us Page"
        imgsrc={web}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
};

export default About;
