import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import MediaLogin from "../MediaLogin/MediaLogin";

const SignUp = () => {
  return (
    <div>
      <h1 className="text-center text-dark fw-bolder my-5">Sign Up</h1>
      <Form className="w-50 d-block m-auto login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="email" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <p className="mt-2">
          Have an account?{" "}
          <Link to="/login" className="text-success fw-bold">
            Login now
          </Link>
        </p>
      </Form>
      <MediaLogin></MediaLogin>
    </div>
  );
};

export default SignUp;
