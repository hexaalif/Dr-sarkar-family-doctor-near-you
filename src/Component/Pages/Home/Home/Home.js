import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Services from "../../Services/Services";
import About from "../../About/About";
import Testimonial from "../../Testimonial/Testimonial";
import Pricing from "../../Pricing/Pricing";
import { Link } from "react-router-dom";
import ServicesItem from "../../../Shared/ServicesItem/ServicesItem";
import useServices from "../../../../Hooks/useServices";

const Home = () => {
  const [services] = useServices();
  return (
    <div>
      <Banner></Banner>
      <div className="container">
        <h1 className="text-center text-dark fw-bolder my-5">Services</h1>
        <div className="service-card">
          {services.slice(0, 3).map((serviceItem) => (
            <ServicesItem
              key={serviceItem._id}
              serviceItem={serviceItem}
            ></ServicesItem>
          ))}
        </div>
        <div className="text-center mt-3">
          <button as={Link} to="/services" className="btn btn-primary fw-bold">
            See More
          </button>
        </div>
      </div>
      <Testimonial></Testimonial>
      <Pricing></Pricing>
    </div>
  );
};

export default Home;
