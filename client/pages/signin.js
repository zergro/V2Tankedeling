import { useState } from "react";
import { Form, Input } from "semantic-ui-react-form-validator";
import { Button } from "semantic-ui-react";
import axios from "axios";
import { useRouter } from 'next/router'

function UserSignIn() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  console.log(identifier, password);

  const router = useRouter()

  const submitForm = async (e) => {
    e.preventDefault();

    //TODO: validate data

    try {
      const res = await axios.post("http://localhost:1337/auth/local", {
        identifier,
        password,
      });
      
      // Set token in local storage
      localStorage.setItem('jwt', res.data.jwt)

      // redicrect back
      router.back()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="form-container">
        <Form onSubmit={submitForm}>
          <h1>Sign in</h1>
          <Input
            label="Email"
            placeholder="Email"
            name="identifier"
            type="text"
            value={identifier}
            validators={["required"]}
            errorMessages={["This field is required"]}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <Input
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            validators={["required"]}
            errorMessages={["This field is required"]}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" primary>
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}
export default UserSignIn;
