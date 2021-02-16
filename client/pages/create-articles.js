import { Container, Form, Button } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";
import TextareaAutosize from "react-textarea-autosize";


function CreateArticles() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

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
      <div className="form-container">
        <Form onSubmit={submitForm} noValidate>
          <h1>Make your article here!</h1>
          <Form.Input 
          required={true}
          label="Title"
          placeholder="Title"
          name="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Input 
          required={true}
          label="Body text"
          placeholder="Your article.. "
          name="body"
          type="text"
          control={TextareaAutosize}
          onChange={(e) => setBody(e.target.value)}
          />

        <Button 
          type="submit"
          primary>
          Login
        </Button>
        </Form>
      </div>
    </>
  );
}

export default CreateArticles;
