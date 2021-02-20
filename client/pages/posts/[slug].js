import { useRouter } from 'next/router';
import { Container, Header, Grid } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!slug) return;
    axios
      .get(`http://localhost:1337/articles/${slug}`)
      .then((res) => setPost(res.data));
  }, [slug]);

  return (
    <>
      <Container text>
        {post && (
          <div>
            {post?.image && (
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${post.image?.url}`}
                style={{ maxWidth: 900 }}
              />
            )}
            <Header as="h2">{post.title}</Header>
            <p>Written by: {post.user.username}</p>
            <p>{post.body}</p>
          </div>
        )}
      </Container>
    </>
  );
};

export default Post;
