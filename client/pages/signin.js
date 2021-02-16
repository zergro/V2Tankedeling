import { Container, Form , Button} from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";

// import '../styles/FormValidation'

function UserSignIn() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("")
  console.log(identifier, password)

  const submitForm = async (e) => {
    e.preventDefault();

    //TODO: validate data
    
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
      <div className="form-container">
        <Form onSubmit={submitForm} noValidate>
          <h1>Sign in</h1>
          <Form.Input 
          required={true}
          label="Email"
          placeholder="Email"
          name="identifier"
          type="text"
          onChange={(e) => setIdentifier(e.target.value)}
          />
        <Form.Input 
          required={true}
          label="Password"
          placeholder="Password"
          name="password"
          type="password"
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
