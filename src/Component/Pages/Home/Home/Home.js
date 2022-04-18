import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Services from "../../Services/Services";
import About from "../../About/About";
import Testimonial from "../../Testimonial/Testimonial";
import Pricing from "../../Pricing/Pricing";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Testimonial></Testimonial>
      <Pricing></Pricing>
    </div>
  );
};

export default Home;
