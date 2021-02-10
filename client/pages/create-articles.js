import getConfig from "next/config";
import { Container } from "semantic-ui-react";
import { parseCookies } from "nookies";
import { useState } from "react";
import axios from "axios";

function CreateArticles({ data }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    // TODO: Validate data

    try {
      const newArticle = await axios.post(
        "/articles",
        { title, body },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEyOTYzMzg2LCJleHAiOjE2MTU1NTUzODZ9.LTC85dSHW832basxAAUekkjLxzMr3Prlz2jc1B6cf6g",
          },
        }
      );

      console.log(newArticle);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <h2>Create article</h2>

        <form onSubmit={submitForm}>
          <input
            type="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />
          <input
            type="content"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
          <br />
          <button type="submit">Post</button>
        </form>
      </Container>
    </>
  );
}

// export async function getServerSideProps(ctx) {

//   const jwt = parseCookies(ctx).jwt

//   const res = await fetch(`${publicRuntimeConfig.API_URL}/create-articles`, {
//     headers:  {
//       Authorization: `Bearer ${jwt}`
//     }
//   })

//   const data = await res.json()

//   return {
//     props: {
//       data : data
//     },
//   };
// }

export default CreateArticles;
