import React from "react";
import Title from "./Title";

const Header = (props) => {
  return (
    <>
      <div className="header">
        <Title label={props.label}></Title>
      </div>
    </>
  );
};

export default Header;
