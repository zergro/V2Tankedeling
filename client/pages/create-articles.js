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
      const formData = new FormData();
      formData.append("data", JSON.stringify({ title, body }));
      formData.append(
        "files.avatar",
        document.getElementById("avatar").files[0]
      );
      const jwt = localStorage.getItem("jwt");

      const newArticle = await axios.post(
        "http://localhost:1337/articles",
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "multipart/form-data",
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
            type="file"
            id="avatar"
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
