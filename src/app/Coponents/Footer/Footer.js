import React, { Fragment } from "react";
import RightCartIcon from "../Cart/RightCartIcon";

function Footer() {
  return (
    <Fragment>
      <RightCartIcon />
      <div className="text-center bg-dark text-white py-2 fixed-bottom">
        <span>
          Scripting Final Project{" "}
          <a href="https://www.facebook.com/" target="blank">
            Facebook
          </a>
        </span>
      </div>
    </Fragment>
  );
}

export default Footer;
