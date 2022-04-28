import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            height="500px"
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/therapist-with-her-patient_1098-1947.jpg?w=826"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="text-success">Anne Sophie's Clinic.</h1>
            <p className="text-primary fs-5 ">
              Our team over 200 doctors join us to give you morders healthcare
              to ensure you stay healthy always .
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="500px"
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/doctor-sitting-workplace-using-laptop_1421-5256.jpg?w=826"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className="text-success">The Heart Disease</h1>
            <p className="text-primary fs-5">
              One of the best things you can do for your heart is to stop
              smoking or using smokeless tobacco.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="500px"
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/filling-medical-record_1098-18239.jpg?w=826"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className="text-success">Life Wellness Programs</h1>
            <p className="text-primary fs-5">
              Stay our touch we will give you advice how to balance work and
              personal life.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
