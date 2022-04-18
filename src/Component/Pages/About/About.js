import React from "react";
import aboutImg from "../../../images/1Mine.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <h1 className="text-center text-dark fw-bolder my-5">About</h1>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 about-img">
            <img className="img-fluid" src={aboutImg} alt="" />
          </div>
          <div className="col-md-6 about-content ">
            <h1>Shad Ullah Sakib</h1>
            <p>
              This a tremendous feeling to share with you about my goals. Be the
              change you want to see in the world. So, flourish yourself first
              in a way that people start to realize that you are the
              change-maker. From an early age, I always wanted to be someone who
              contributes to society. So, I started exploring things. As an era
              of technology, I found coding is a great asset to contribute in
              solving problems more. Therefore, I am Shunning my web development
              skills with Jhankar Mahbub. Beside coding, I am highly advanced in
              Graphic Designing. Adobe Photoshop and Illustrator are my core
              tools. I have been working as an editor, publishing a bulletin
              every month for the last 7 months. Recently, I published a
              Souvenir which was a great success for me. I hope, My life impacts
              everyone to become more curious and honest about themselves. In
              conclusion, evolve and live yourselves every second of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
