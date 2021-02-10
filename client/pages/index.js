import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:1337/articles")
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Posts</h1>
        {posts?.map((p) => (
          <div key={p.id}>
            <img src={p.image.name} alt=""></img>
            <h2><a href="/">{p.title}</a></h2>
            <p>{p.body}</p>
          </div>
        ))}
      </main>
    </div>
  );
}