import React from "react";
import "./style.css";

function PonyCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} />
      </div>
    </div>
  );
}

export default PonyCard;
