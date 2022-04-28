import React from "react";
import { Container } from "react-bootstrap";
/* import User from "../../Images/Logo/murad.png"; */
import "./About.css";

const About = () => {
  return (
    <Container className="my-5">
      {/* <div className="text-center mt-3">
        <img src={User} alt="" />
      </div> */}
      <div className="mx-5">
        <h1 className="text-success text-center mb-3">
          My Current Status And Future Plans{" "}
        </h1>
        <p>
          On a personal level, I am highly-motivated, result oriented,
          self-driven, hard-working, fast learner and constantly seeking to
          improve my skills and am fully aware of the latest Front-end
          Development Tools.
        </p>
        <p>
          In addition to this, I have the ability to adapt to any type of team
          environment, I am team oriented and get along with others when working
          in a group setting. I also have the ability to work independently
          while staying on schedule and meeting those tight deadlines.
        </p>
        <p>
          Currently I am learning react and type script and doing several project
          based of my learning and previous experience. I am also doing problem
          solving in various platform when I am getting time. Web development is
          my passion and my favorite language is ruby on rails
        </p>
      </div>
    </Container>
  );
};

export default About;
