import { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

const userSignup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({})


  const submitForm = async (e) => {
    e.preventDefault();
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let tempErrors = {}

    if (username === '') {
      tempErrors.username = 'must not be empty'
    }
    if (email === '') {
      tempErrors.email = 'must not be empty'
    } else if (!email.match(regEx)) {
      tempErrors.email = 'Must be a valid email address'
    }
    if (password === '') {
      tempErrors.password = 'must not be empty'
    }
    if (confirmPassword === '') {
      tempErrors.confirmPassword = 'must not be empty'
    } else if (confirmPassword !== password) {
      tempErrors.confirmPassword = 'Does not match password'
    }

    setErrors(tempErrors)
    if(Object.keys(tempErrors).length > 0) return

    try {
      const newUser = await axios.post(
        "http://localhost:1337/auth/local/register",
        { username, email, password }
      ).then(console.log('We are sending a request'));

      console.log(newUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="form-container">
        <Form onSubmit={submitForm} noValidate>
          <h1>Sign up</h1>
          <Form.Input
            label="Username"
            placeholder="Username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={errors?.username}
          />
          <Form.Input
            label="Email"
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors?.email}
          />
          <Form.Input
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors?.password}
          />
          <Form.Input
            label="Confirm password"
            placeholder="Confirm password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors?.confirmPassword}
          />
          <Button type="submit" primary>
            Create your user
          </Button>
        </Form>
      </div>
    </>
  );
};

export default userSignup;
