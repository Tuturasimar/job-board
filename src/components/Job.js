import React from "react";

const Job = (props) => {
  return (
    <div className={props.cover_color}>
      <h2>{props.title}</h2>
      <div>
        <span className="list">
          {props.contractType}
          {props.country}
          {props.city}
        </span>
      </div>
    </div>
  );
};

export default Job;
