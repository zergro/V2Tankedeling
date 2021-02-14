// import "tailwindcss/tailwind.css";
// import '../styles/globals.css'
import '../styles/app.css';
import 'semantic-ui-css/semantic.min.css'

// import Router from "next/router";
import NavBar from "../components/NavBar";
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

export default MyApp;
