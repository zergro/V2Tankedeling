import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'next/link'

import PostCard from '../components/PostCard'
import { Grid, Card, Image } from "semantic-ui-react";

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
        <title>Tankedeling</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Posts</h1>
        {posts?.map((p) => (
          <Grid.Column key={p.id} style={{ marginBottom: 20 }}>
            <PostCard post={p} />
          </Grid.Column>
        ))}
      </main>
    </div>
  );
}