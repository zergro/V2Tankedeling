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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Posts</h1>
        {posts?.map((p) => (
          <div key={p.id}>
            <p>{p.title}</p>
            <p>{p.content}</p>
          </div>
        ))}
      </main>
    </div>
  );
}