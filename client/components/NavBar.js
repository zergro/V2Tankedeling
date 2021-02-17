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
    <Menu secondary>
      <Menu.Item>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Link href="/create-articles">
            <a>Create article</a>
          </Link>
        </Menu.Item>
        {user ? (
          <Menu.Item>
            <button onClick={logout}>Logout</button>
        </Menu.Item>
        ) : (
          <>
        <Menu.Item>
          <Link href="/signin">
            <a>Sign in</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>Sign up</a>
          </Link>
        </Menu.Item>
        </>
        )}
      </Menu.Menu>
    </Menu>
  );
}
export default NavBar;
