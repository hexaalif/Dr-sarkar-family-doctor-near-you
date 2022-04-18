import React from "react";
import useServices from "../../../Hooks/useServices";
import ServicesItem from "../../Shared/ServicesItem/ServicesItem";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useServices();
  return (
    <div className="container">
      <h1 className="text-center text-dark fw-bolder my-5">Services</h1>
      <div className="service-card">
        {services.map((serviceItem) => (
          <ServicesItem
            key={serviceItem._id}
            serviceItem={serviceItem}
          ></ServicesItem>
        ))}
      </div>
    </div>
  );
};

export default Services;
