import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <section className="cover-img">
        <div className="ban_overlay">
          <div className="container d-flex flex-row-reverse">
            <div className="ban-content">
              <h1 className="header-title">
                <span className="dr-span">Dr.</span> Sarkar
              </h1>
              <h4>professional care for your health</h4>
              <div
                style={{ height: "3px" }}
                className="w-50 bg-dark my-5"
              ></div>
              <p className="fs-5">
                One of the essential qualities of a professional doctor is his
                humanity. At my clinic, I take a great care of your mental and
                physical health
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
