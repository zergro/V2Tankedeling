import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/App.css';
import 'react-quill/dist/quill.snow.css';
import Head from 'next/head';

import NavBar from '../components/NavBar';
import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tankedeling</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
