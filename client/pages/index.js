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
      .then((res) => setPosts(res.data))
      .then(console.log('We are sending a request'));

  }, []);

  return (
    <div className="container">
      <div className="grid-cols-3 gap-4">
        <div className="grid-rows-1">
          {posts?.map((p) => (
            <div key={p.id}>
              <PostCard post={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
