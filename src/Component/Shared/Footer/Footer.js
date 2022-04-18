import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="text-center mt-5">
        <p>
          Nothing in this world can take the place of Persistence ~{" "}
          <span className="last_color">Calvin Coolidge</span>{" "}
        </p>
        <p>
          &copy; Copyright reserved by{" "}
          <span style={{ color: "#D90267" }} className="fw-bold">
            Dr. Sarker
          </span>
          , {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
