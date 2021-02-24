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
      <div className=" flex items-center justify-center">
        <form
          id="form"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={submitForm}
        >
          <br />
          <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">
            Login
          </h1>
          <br />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={errors?.username}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors?.email}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              error={errors?.password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
              name="password"
              type="password"
              value={confirmPassword}
              error={errors?.confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              id="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create article
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default userSignup;
