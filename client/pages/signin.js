import { useState } from "react";
import { Form } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import axios from "axios";
import { useRouter } from 'next/router'

function UserSignIn() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({})

  const router = useRouter()

  const submitForm = async (e) => {
    e.preventDefault();
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let tempErrors = {}

    if(identifier === ''){
      tempErrors.identifier = 'must not be empty'
    } else if(!identifier.match(regEx)){
      tempErrors.identifier = 'Must be a valid email address'
    }
    if(password === ''){
      tempErrors.password = 'Password must not be empty'
    }

    setErrors(tempErrors)
    if(Object.keys(tempErrors).length > 0) return

    try {
      const res = await axios.post("http://localhost:1337/auth/local", {
        identifier,
        password,
      }).then(console.log('We are sending a request'));
      
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
        <Form onSubmit={submitForm} noValidate>
          <h1>Sign in</h1>
          <Form.Input
            label="Email"
            placeholder="Email"
            name="identifier"
            type="email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            error={errors?.identifier}
          />
          <Form.Input
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            error={errors?.password}
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
