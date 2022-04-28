import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, picture, description } = service;
  const nagigate = useNavigate();

  const navigeteoServiceDetail = (id) => {
    nagigate(`/servicedetail/${id}`);
  };

  return (
    <div className="service-container my-2 container">
      <img src={picture} height="200px" alt="" />
      <h5 className="text-success mt-1">{name}</h5>
      <p> {description}</p>
      <button
        onClick={() => navigeteoServiceDetail(id)}
        className="btn btn-danger mx-1 px-4"
      >
        More
      </button>
    </div>
  );
};

export default Service;
