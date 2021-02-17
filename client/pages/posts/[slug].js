import { useRouter } from "next/router";
import { Container, Header, Grid } from "semantic-ui-react";
import { useState, useEffect } from "react";
import axios from "axios";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug)

  const [post, setPost] = useState(null);

  useEffect(() => {
    if(!slug) return
    axios
      .get(`http://localhost:1337/articles/${slug}`) // Could it be added if {slug} is not found, use slug from the post?
      .then((res) => setPost(res.data));
  }, [slug]);

  return (
    <>
      <Container text>
        {post && (
          <div>
            <img src={post.image.name} style={{ maxWidth: 900 }} />
            <Header as="h2">{post.title}</Header>
            <p>{post.body}</p>
          </div>
        )}
      </Container>
    </>
  );
};

// export function showArticle() {
//   return (
//     <Container text>
//       <Header as="h2">Hei</Header>
//       <p>
//         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
//         ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
//         magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
//         ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
//         quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
//         arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
//         Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
//         dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
//         tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
//         enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
//         Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
//         imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
//         ultricies nisi.
//       </p>
//     </Container>
//   );
// }

export default Post;
