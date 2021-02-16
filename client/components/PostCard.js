import { Card, Image } from 'semantic-ui-react';
import Link from 'next/link';

function PostCard({
  post: { title, body, image, slug }}) {

  return (
    <>
    <Card fluid style={{ marginBottom: 20, width: 500 }}>
      <Image src={image.name} alt=""/>
      <Card.Content>
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
