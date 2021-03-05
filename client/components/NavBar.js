import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

function NavBar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    axios
      .get('/users/me', { headers: { Authorization: `Bearer ${jwt}` } })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    localStorage.removeItem('jwt');
    setUser(null);
  };
  return (
    <div className="antialiased bg-body text-body font-body">
      <div className="">
        <section>
          <div className="container px-32 mx-auto">
            <nav className="flex justify-between items-center py-6">
              <Link href="/">
                <a className="text-3xl font-semibold leading-none">
                  <img
                    className="h-10"
                    src="https://i.ibb.co/PTTSygP/Tankedeling-logo.jpg"
                    alt=""
                    width="auto"
                  />
                </a>
              </Link>
              <div className="lg:hidden">
                <button className="navbar-burger flex items-center py-2 px-3 text-blue-600 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
                  <svg
                    className="fill-current h-4 w-4"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>
              <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                <li>
                  <a
                    className="text-sm text-blueGray-400 hover:text-blueGray-500"
                    href="#"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-blueGray-400 hover:text-blueGray-500"
                    href="#"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-blueGray-400 hover:text-blueGray-500"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-blueGray-400 hover:text-blueGray-500"
                    href="#"
                  >
                    Features
                  </a>
                </li>
              </ul>
              <div className="hidden lg:block">
                {user ? (
                  <div className="flex">
                    <Link href="/profile">
                      <a>
                        <button className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-800 focus:ring-opacity-50 mr-20">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </button>
                      </a>
                    </Link>
                    <Link href="/create">
                      <a className="mr-2 inline-block px-4 py-3 text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded">
                        Create article
                      </a>
                    </Link>
                    <button
                      className="inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded"
                      onClick={logout}
                    >
                      Sign out
                    </button>
                  </div>
                ) : (
                  <>
                    <Link href="/login">
                      <a className="mr-2 inline-block px-4 py-3 text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded">
                        Log In
                      </a>
                    </Link>
                    <Link href="/signup">
                      <a className="inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded">
                        Sign Up
                      </a>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
          <div className="hidden navbar-menu relative z-50">
            <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
              <div>
                <ul>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                      href="#"
                    >
                      Product
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                      href="#"
                    >
                      Company
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                      href="#"
                    >
                      Features
                    </a>
                  </li>
                </ul>
                <div className="mt-4 pt-6 border-t border-blueGray-100">
                  <a
                    className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded"
                    href="#"
                  >
                    Sign Up
                  </a>
                  <a
                    className="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded"
                    href="#"
                  >
                    Log In
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
}

export default NavBar;
