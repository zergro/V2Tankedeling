import { Container, Form, Button } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";
import TextareaAutosize from "react-textarea-autosize";

function CreateArticles() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    // TODO: Validate data

    try {
      const newArticle = await axios.post(
        "http://localhost:1337/articles",
        { title, body, image },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEzNTQ4NDI2LCJleHAiOjE2MTYxNDA0MjZ9.WbmDLMk_pe1p6lSBc3j7c8CftcKNinpsqOg7mDHp1-0",
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
        <Form onSubmit={submitForm}>
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
            label="Image"
            placeholder="Image"
            name="image"
            type="text"
            onChange={(e) => setImage(e.target.value)}
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

          <Button type="submit" primary>
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}

export default CreateArticles;
