import React from "react";
import Articles from "../components/articles";
// import PostCard from '../components/PostCard'
// import { Grid, Card, Image } from "semantic-ui-react";
import { fetchAPI } from "../lib/api";

const Home = ({ articles }) => {
  return (
    <div>
      <Articles articles={articles} />
    </div>
  );
}

export async function getStaticProps() {
  const [ articles ] = await Promise.all([
    fetchAPI("articles")
  ]);
  return {
    props: { articles },
    revalidate: 1,
  };
}

export default Home;