import React from "react";

const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <p>
          <span className="not_bold_text">Made with </span>
          <span>{props.tool} </span>
          <span className="not_bold_text">at </span>
          <span>{props.location} </span>
          <span className="not_bold_text">By </span>
          <span>{props.creator}</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
