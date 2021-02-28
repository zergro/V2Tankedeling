import React, { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

function UserSignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, handleSubmit, errors, watch } = useForm();

  const router = useRouter();

  const checkPassword = useRef({});
  checkPassword.current = watch('password', '');

  const onSubmit = handleSubmit(async (e) => {
    console.log(e);

    try {
      const newUser = await axios
        .post('http://localhost:1337/auth/local/register', {
          username,
          email,
          password,
        })
        .then(console.log('We are sending a request'));

      router.back();
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div className="flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-3xl font-bold text-gray-900 text-center">
          Register your new user
        </div>
      </div>
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <form action="" className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label className="text-sm font-bold text-gray-600 block">
              Email
            </label>
            <input
              ref={register({
                required: true,
              })}
              style={{ borderColor: errors.email ? 'red' : '' }}
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.email && 'Email is invalid'}
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600 block">
              Username
            </label>
            <input
              ref={register({
                required: true,
              })}
              style={{ borderColor: errors.username ? 'red' : '' }}
              name="username"
              type="username"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.email && 'Username is invalid'}
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600 block">
              Password
            </label>
            <input
              ref={register({
                required: true,
              })}
              style={{ borderColor: errors.password ? 'red' : '' }}
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.password && 'Password is invalid'}
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600 block">
              Confirm password
            </label>
            <input
              ref={register({
                required: true,
                validate: (value) => value === watch('password'),
              })}
              style={{ borderColor: errors.checkPassword ? 'red' : '' }}
              name="checkPassword"
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.checkPassword && 'Your password does not match'}
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600 block">
              Source
            </label>
            <select
              name=""
              id=""
              className="w-full p-2 border border-gray-300 rounded mt-1"
            >
              <option value="Youtube">Youtube</option>
              <option value="Website">Website</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-600">
                Terms of policy..
              </label>
            </div>
            <div>
              <Link href="/login">
                <a className="font-medium text-sm text-blue-500">
                  Already have a user?
                </a>
              </Link>
            </div>
          </div>
          <div>
            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default UserSignUp;
