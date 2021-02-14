import { Container } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";

function CreateArticles() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  console.log(title, body);

  const submitForm = async (e) => {
    e.preventDefault();

    // TODO: Validate data

    try {
      const newArticle = await axios.post(
        "http://localhost:1337/articles",
        { title, body },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEzMjQzNTY1LCJleHAiOjE2MTU4MzU1NjV9.dDQm-pifoF4lucwRdGjh1BgW0sCqsjmDCzIgwNvZF70",
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
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />
          <input
            type="content"
            placeholder="article body"
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

export default CreateArticles;
