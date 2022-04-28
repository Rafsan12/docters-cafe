import React, { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-5">
      <h1 className="text-center text-danger">Our Services</h1>
      <Container className="services-container">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </Container>
    </div>
  );
};

export default Services;
