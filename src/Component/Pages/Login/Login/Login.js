import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import MediaLogin from "../MediaLogin/MediaLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let navigate = useNavigate();
  const handleLogIn = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message} </p>;
  }

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <h1 className="text-center text-dark fw-bolder my-5">Login</h1>
      <Form onSubmit={handleLogIn} className="w-50 d-block m-auto login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {errorElement}
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
