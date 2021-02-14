import React, { Component } from 'react'
import { Input, Menu, MenuItem } from 'semantic-ui-react'
import Link from 'next/link'

function NavBar(){

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
          <Menu.Item>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/signup">
              <a>Signup</a>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }

  export default NavBar;
