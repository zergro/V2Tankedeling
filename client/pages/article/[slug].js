import { Container, Header } from "semantic-ui-react";
import axios from 'axios'

import { fetchAPI } from "../../lib/api";

const Article = ({ article }) => {

  return (
    <Container text>
      <Header as="h2">{article.title}</Header>
      <p>{article.body}</p>
      <p>By {article.user}</p>
    </Container>
  );
};

export async function getStaticPaths() {
  const articles = await axios.get('http://localhost:1337/articles')
  console.log(articles);

  return {
    paths: 
    articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`);

  return {
    props: { article: articles[0] },
    revalidate: 1,
  };
}

export default Article;
