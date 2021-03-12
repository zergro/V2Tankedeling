import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

function UserSignIn() {
  const [identifier, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, handleSubmit, errors } = useForm();

  const router = useRouter();

  const onSubmit = handleSubmit(async (e) => {
    try {
      const res = await axios.post('http://localhost:1337/auth/local', {
        identifier,
        password,
      });

      // Set token in local storage
      localStorage.setItem('jwt', res.data.jwt);

      // redirect back
      // router.back();
      window.location.href = '/';
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div className="flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-3xl font-bold text-gray-900 mt-16 text-center">
          Login
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
              style={{ borderColor: errors.identifier ? 'red' : '' }}
              name="identifier"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.identifier && 'Email is invalid'}
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
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>
            <div>
              <a href="" className="font-medium text-sm text-blue-500">
                Forgot Password?
              </a>
            </div>
            <div>
              <Link href="/signup">
                <a className="font-medium text-sm text-blue-500">New user?</a>
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
export default UserSignIn;
