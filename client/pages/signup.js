import { Button, Form, Container } from 'semantic-ui-react';
// import Link from 'next/link';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Alert } from 'react-bootstrap';
import axios from 'axios';

const userSignup = () => {
  const { register, handleSubmit, errors } = useForm();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  console.log(username, email, password);

  const submitForm = async (e) => {
    e.preventDefault();

    // TODO: Validate data

    try {
      const newUser = await axios.post(
        "http://localhost:1337/auth/local/register",
        { username, email, password },
      );

      console.log(newUser);
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <>
    <Container>
      <h2>User signup</h2>

      <form onSubmit={submitForm}>
        <input
          type="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        {/* <input
          type="password"
          placeholder="confirm you password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <br /> */}
        <button type="submit">Login</button>
      </form>
    </Container>
  </>
  );
}

export default userSignup;
