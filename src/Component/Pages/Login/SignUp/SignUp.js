import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import MediaLogin from "../MediaLogin/MediaLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  let navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
    let path = `/home`;
    navigate(path);
  };

  return (
    <div>
      <h1 className="text-center text-dark fw-bolder my-5">Sign Up</h1>
      <Form onSubmit={handleSignUp} className="w-50 d-block m-auto login-form">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
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
