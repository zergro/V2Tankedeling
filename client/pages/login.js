import getConfig from "next/config";
import { Container } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";

function UserLogin() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  console.log(identifier, password);


  const submitForm = async (e) => {
    e.preventDefault();

    // TODO: Validate data

    try {
      const newLogin = await axios.post(
        "http://localhost:1337/auth/local",
        { identifier, password },
      );
      console.log(newLogin);
      console.log()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <h2>User login</h2>

        <form onSubmit={submitForm}>
          <input
            type="identifier"
            placeholder="email"
            onChange={(e) => setIdentifier(e.target.value)}
            value={identifier}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </Container>
    </>
  );
}
export default UserLogin;
