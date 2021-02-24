import React, { Component, useState, useEffect } from "react";
import { Input, Menu, MenuItem } from "semantic-ui-react";
import Link from "next/link";
import Axios from 'axios'

function NavBar() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    Axios.get('/users/me', { headers: { Authorization: `Bearer ${jwt}` }})
      .then(res => { setUser(res.data)})
      .catch(err => console.log(err))
  }, [])

  const logout = () => {
    localStorage.removeItem('jwt')
    setUser(null)
  }

  return (
    // This example requires Tailwind CSS v2.0+ 
    <nav className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/"><a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Tankedeling</a></Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {user? (
                  <>
                  <Link href="/create-articles"><a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Create article</a></Link>
                  <button onClick={logout}>Sign out</button>
                  </>
                ) : (
                  <>
                  <Link href="/signin"><a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Sign in</a></Link>
                  <Link href="/signup"><a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Sign up</a></Link>
                  </>
                 )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
