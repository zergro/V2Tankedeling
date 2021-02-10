import getConfig from "next/config";
import { Container } from "semantic-ui-react";
import { useState } from "react";
import fetch from "isomorphic-unfetch";
import { setCookie, destroyCookie } from "nookies";
import Router from "next/router";

const { publicRuntimeConfig } = getConfig();

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const loginInfo = {
      identifier: username,
      password: password,
    };

    const login = await fetch(`${publicRuntimeConfig.API_URL}/auth/local`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });

    const loginResponse = await login.json();

    setCookie(null, "jwt", loginResponse.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    Router.push("/create-articles");
  }
  function handleLogout() {
    destroyCookie(null, "jwt");
  }

  return (
    <>
      <Container>
        <h2>You need to login to access this page</h2>

        <form>
          <input
            type="email"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <button type="button" onClick={() => handleLogin()}>
            Login
          </button>
          <button type="button" onClick={() => handleLogout()}>
            Logout
          </button>
        </form>
      </Container>
    </>
  );
}
export default Login;
