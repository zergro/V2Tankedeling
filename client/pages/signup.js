import { useForm } from "react-hook-form";
import { useState } from "react";
import { Form, Input } from 'semantic-ui-react-form-validator';
import { Button } from "semantic-ui-react";
import axios from "axios";

const userSignup = () => {
  const { register, handleSubmit, errors } = useForm();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    // TODO: Validate data

    try {
      const newUser = await axios.post(
        "http://localhost:1337/auth/local/register",
        { username, email, password }
      );

      console.log(newUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="form-container">
        <Form onSubmit={submitForm}>
          <h1>Sign up</h1>
          <Input
            label="Username"
            placeholder="Username"
            name="username"
            type="text"
            validators={['required']} 
            errorMessages={['This field is required']} 
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Email"
            placeholder="Email"
            name="identifier"
            type="text"
            validators={['required']} 
            errorMessages={['This field is required']} 
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <Input
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            validators={['required']} 
            errorMessages={['This field is required']} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" primary>
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};

export default userSignup;
