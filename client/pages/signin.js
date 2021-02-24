import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function UserSignIn() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault();
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let tempErrors = {};

    if (identifier === '') {
      tempErrors.identifier = 'must not be empty';
    } else if (!identifier.match(regEx)) {
      tempErrors.identifier = 'Must be a valid email address';
    }
    if (password === '') {
      tempErrors.password = 'Password must not be empty';
    }

    setErrors(tempErrors);
    if (Object.keys(tempErrors).length > 0) return;

    try {
      const res = await axios
        .post('http://localhost:1337/auth/local', {
          identifier,
          password,
        })
        .then(console.log('We are sending a request'));

      // Set token in local storage
      localStorage.setItem('jwt', res.data.jwt);

      // redicrect back
      router.back();
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
              placeholder="Email"
              name="identifier"
              type="email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              error={errors?.identifier}
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
}
export default UserSignIn;
