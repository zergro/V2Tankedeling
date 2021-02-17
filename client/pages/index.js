import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";

import PostCard from "../components/PostCard";
import { Container, Grid, GridColumn, Transition } from "semantic-ui-react";

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

      <Container>
        <Grid columns={3}>
          <Grid.Row>
            <h1>Posts</h1>
          </Grid.Row>
          <Grid.Row>
            {posts?.map((p) => (
              <Grid.Column key={p.id} style={{ marginBottom: 20 }}>
                <PostCard post={p} />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
