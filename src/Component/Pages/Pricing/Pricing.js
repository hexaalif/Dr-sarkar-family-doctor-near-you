import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="container">
      <h1 className="text-center text-dark fw-bolder my-5">Pricing</h1>
      <CardGroup className="text-center">
        <Card className="m-2 card-style">
          <Card.Img
            variant="top"
            src="https://www.swaconhospital.com/wp-content/uploads/2019/09/34-5-reasons-why-you-need-a-regular-checkup-feat-1080x600.jpg"
          />
          <Card.Body>
            <Card.Title>
              <b>$220</b>
            </Card.Title>
            <Card.Text>
              <p>Daily Checkup</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-2 card-style">
          <Card.Img
            variant="top"
            src="https://www.guideposts.org/sites/default/files/styles/bynder_webimage/public/story/doctorvisit_marquee.jpg"
          />
          <Card.Body>
            <Card.Title>
              <b>$380</b>
            </Card.Title>
            <Card.Text>
              <p>Long term Evaluation</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-2 card-style">
          <Card.Img
            variant="top"
            src="https://media.bizj.us/view/img/11684257/gettyimages-1234036542*1200xx2121-1198-0-33.jpg"
          />
          <Card.Body>
            <Card.Title>
              <b>$120</b>
            </Card.Title>
            <Card.Text>
              <p>First Appointment</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Pricing;
