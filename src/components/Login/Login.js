import { Button, Container } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";
import "./Login.css";
import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { BsGoogle } from "react-icons/bs";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSignInWithGoogle,

} from "react-firebase-hooks/auth";

const Login = () => {
  const navigate = useNavigate();
  const inputEmail = useRef("");
  const inputPass = useRef("");
  const [user, loading, error] = useAuthState(auth);
  const [SignInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);
  
  const location = useLocation();

  let errorElement;

  let from = location.state?.from?.pathname || "/";

  const navigateRegister = () => {
    navigate("/register");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = inputEmail.current.value;
    const password = inputPass.current.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        alert(error.message);
      });

    // inputEmail.current.value = "";
  };
  if (googleUser) {
    navigate("/");
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  if ( googleError) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  return (
    <Container className="w-50 mx-auto my-5 p-3 login-container">
      <Form onSubmit={handleSubmit}>
        <h1 className="text-success text-center mb-2">Login information</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={inputEmail}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={inputPass}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button className="px-4 mb-2" variant="primary" type="submit">
          Login
        </Button>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <div className="d-flex">
            <Form.Text>New to  Doctors cafe?</Form.Text>
            <Link
              onClick={navigateRegister}
              className="text-decoration-none ps-2"
              to="/register"
            >
              Please register here
            </Link>
          </div>
        </Form.Group>
      </Form>
      <div className="login-divider">
        <div
          style={{ height: "1px", backgroundColor: "green", width: "50%" }}
        ></div>
        <p className="divider-position">or</p>
        <div
          style={{ height: "1px", backgroundColor: "green", width: "50%" }}
        ></div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <button
          onClick={() => SignInWithGoogle()}
          className="w-50 my-2 btn-success"
        >
          <span className="text-warning">
            <BsGoogle />
          </span>{" "}
          Google LogIn
        </button>
      
      </div>
    </Container>
  );
};

export default Login;
