import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ServicesItem = ({ serviceItem }) => {
  const { name, img, price, about } = serviceItem;
  let navigate = useNavigate();

  const handleBookNow = () => {
    let path = `/pricing`;
    navigate(path);
  };
  return (
    <div className="container">
      <div className="row">
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <h4>{price}</h4>
            <Card.Text>{about}</Card.Text>
            <Button onClick={handleBookNow} variant="primary">
              Book Now
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ServicesItem;
