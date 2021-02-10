import "../styles/globals.css";
import Router from "next/router";
import NavBar from "../components/NavBar";
import { parseCookies } from "nookies";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

function redirectUser(ctx, location) {
  if (process.browser) {
    if (ctx.reg) {
      ctx.res.writeHead(302, { Location: location });
      ctx.res.end();
    } else {
      Router.push(location);
    }
  }
}

MyApp.getInitialProps = async ({ ctx }) => {
  const jwt = parseCookies(ctx).jwt;

  if (!jwt) {
    if (ctx.pathname === "/create-articles") {
      redirectUser(ctx, "/login");
    }
  }
  return {};
};

export default MyApp;
