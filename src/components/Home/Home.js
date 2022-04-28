import React from "react";
import Services from "../Services/Services";
import "./Home.css";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Services />
    </div>
  );
};

export default Home;
