import { Card, Image } from 'semantic-ui-react';
import Link from 'next/link';
import userSignup from '../pages/signup';

function PostCard({ post: { title, body, image, slug, } }) {
  return (
    <>
      <Card fluid style={{ marginBottom: 20, width: 300 }}>
        {image && (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${image?.url}`}
            alt=""
          />
        )}
        <Card.Content>
          {/* <Card.Description>Author: {user.username}</Card.Description> */}
          <Card.Header>{title}</Card.Header>
          <Card.Description>{body}</Card.Description>
          <Link href={`/posts/${slug}`}>
            <a>Read more</a>
          </Link>
        </Card.Content>
      </Card>
    </>
  );
}

export default PostCard;
