import { useState } from "react";
import { Form, Input } from "semantic-ui-react-form-validator";
import { Button } from "semantic-ui-react";
import axios from "axios";

function UserSignIn() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  console.log(identifier, password);

  const submitForm = async (e) => {
    e.preventDefault();

    //TODO: validate data

    try {
      const newLogin = await axios.post("http://localhost:1337/auth/local", {
        identifier,
        password,
      });
      console.log(newLogin);
      console.log();
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
