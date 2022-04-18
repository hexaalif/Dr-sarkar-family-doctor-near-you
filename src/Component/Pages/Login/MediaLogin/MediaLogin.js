import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MediaLogin = () => {
  return (
    <div className="container">
      <div className="w-50 d-flex m-auto justify-content-center align-items-center">
        <div style={{ height: "2px" }} className="w-25 bg-dark"></div>
        <p className="mt-2 p-2">or</p>
        <div style={{ height: "2px" }} className="w-25 bg-dark"></div>
      </div>
      <div>
        <button className="w-25 d-block btn btn-primary m-auto">
          <FontAwesomeIcon icon={faGoogle} /> Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default MediaLogin;
