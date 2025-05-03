import React from "react";

const Card = ({ title }) => (
  <div className="col-sm-6 col-md-3 mb-4">
    <div className="card h-100">
      <img
        src="https://dummyimage.com/500x325.jpg"
        className="img-fluid"
        alt="Placeholder"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rem odit neque cumque eos quod nihil, exercitationem dignissimos accusantium magnam quasi amet ratione, impedit libero facere dicta magni eaque soluta.</p>
        <a href="#" className="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  </div>
);

export default Card;
