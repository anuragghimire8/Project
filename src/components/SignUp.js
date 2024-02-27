import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Button } from "react-bootstrap"; // Import Button from react-bootstrap
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/"); // 
    } catch (err) {
      setError(err.message);
    }
  };

 

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth SignUp</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)} // Add 'e' as parameter
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} // Add 'e' as parameter
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit"> {/* Change 'Submit' to 'submit' */}
              Sign Up
            </Button>
          </div>
        </Form>
        <hr />
        <div>
         
        </div>
        <Link to="/phonesignup">
          <div className="d-grid gap-2 mt-3">
            <Button variant="success" type="submit">
              Sign in with Phone
            </Button>
          </div>
        </Link>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already Have an account? <Link to="/">Log In </Link>
      </div>
    </>
  );
};

export default Login;
