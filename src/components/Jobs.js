import React from "react";
import Job from "./Job";

const Jobs = (props) => {
  return (
    <Job
      cover_color={props.cover_color}
      title={props.title}
      contractType={props.contractType}
      country={props.country}
      city={props.city}
    ></Job>
  );
};

export default Jobs;
