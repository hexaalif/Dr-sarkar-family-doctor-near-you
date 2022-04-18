import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MediaLogin from "../MediaLogin/MediaLogin";

const Login = () => {
  let navigate = useNavigate();
  const handleLogIn = () => {
    navigate("/home");
  };
  return (
    <div>
      <h1 className="text-center text-dark fw-bolder my-5">Login</h1>
      <Form onSubmit={handleLogIn} className="w-50 d-block m-auto login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className="mt-2">
          Not have an Account Yet?{" "}
          <Link to="/signup" className="text-success fw-bold">
            Sign up now
          </Link>
        </p>
      </Form>
      <MediaLogin></MediaLogin>
    </div>
  );
};

export default Login;
