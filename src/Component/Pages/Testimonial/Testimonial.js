import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Testimonial = () => {
  return (
    <div className="container">
      <h1 className="text-center text-dark fw-bolder my-5">Testimonial</h1>
      <div>
        <CardGroup>
          <Card className="m-2">
            <Card.Img
              variant="top"
              src="https://studyinsweden.se/transformations/2018/10/Lauren_avatar_1539010933.jpg-1920x.jpg"
            />
            <Card.Body>
              <Card.Title>Kristin Ruiz</Card.Title>
              <h5 style={{ color: "#604193" }}>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 4.8{" "}
              </h5>
              <Card.Text>
                Who know's more about women problems than Dr. Sarkar? I highly
                recommend her.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-2">
            <Card.Img
              variant="top"
              src="https://media.nngroup.com/media/people/photos/20211213_Vegas-tanner.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg"
            />
            <Card.Body>
              <Card.Title>Marshall Thompson</Card.Title>
              <h5 style={{ color: "#604193" }}>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 4.3{" "}
              </h5>
              <Card.Text>
                I counselled to many doctors. But couldn't found a doctor like
                Dr. Sarkar.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-2">
            <Card.Img
              variant="top"
              src="https://cdn.shopify.com/s/files/1/0045/5104/9304/files/Shave-and-Beard-2020.jpg?v=1608649489"
            />
            <Card.Body>
              <Card.Title>Freda Paul</Card.Title>
              <h5 style={{ color: "#604193" }}>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 4.5{" "}
              </h5>
              <Card.Text>
                Searching for a personal doctor? East or West, Dr. Sarkar is the
                best.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Testimonial;
