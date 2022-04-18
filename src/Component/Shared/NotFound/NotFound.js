import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../../images/cry.jpg";

const NotFound = () => {
  return (
    <div className="text-center my-5">
      <img src={notfound} alt="" />
      <h3>
        <Link to="/">Redirect to Home</Link>
      </h3>
    </div>
  );
};

export default NotFound;
