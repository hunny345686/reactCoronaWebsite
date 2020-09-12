import React from "react";
import web from "../src/Images/lep1.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name=" Go And Learn React With"
        imgsrc={web}
        visit="/services"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
