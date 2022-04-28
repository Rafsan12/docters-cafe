import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const serviceid = useParams();
  console.log(serviceid);
  return (
    <div>
      <Container>
        <h2 className="text-center text-success mt-3">MAKE AN APPOINTMENT</h2>
        <form className="w-50 mx-auto">
          <input
            className="w-100 mt-2"
            style={{ height: "40px" }}
            type="text"
            name=""
            placeholder="First Name"
            id=""
          />
          <br />
          <input
            className="w-100 mt-2"
            style={{ height: "40px" }}
            type="text"
            name=""
            placeholder="Last Name"
            id=""
          />
          <br />
          <input
            className="w-100 mt-2"
            style={{ height: "40px" }}
            type="text"
            name=""
            placeholder="Subject"
            id=""
          />
          <br />
          <input
            className="w-100 mt-2"
            style={{ height: "40px" }}
            type="text"
            name=""
            placeholder="Date"
            id=""
          />
          <br />
          <input
            className="w-100 mt-2"
            style={{ height: "40px" }}
            type="text"
            name=""
            placeholder="Your Email"
            id=""
          />
          <br />
          <input
            className="w-100 mt-2"
            style={{ height: "40px" }}
            type="text"
            name=""
            placeholder="Your Phone"
            id=""
          />
          <br />
          <textarea
            className="w-100 mt-2"
            style={{ height: "200px" }}
            name=""
            id=""
            placeholder="Write Message"
            cols="30"
            rows="5"
          ></textarea>
          <br />
          <button className="btn btn-primary px-4">Send Message</button>
        </form>
      </Container>
    </div>
  );
};

export default ServiceDetail;
