import getConfig from "next/config";
import { Container } from "semantic-ui-react";
import { parseCookies } from 'nookies'
import { useState } from 'react'

const { publicRuntimeConfig } = getConfig();

function CreateArticles({ data }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  async function handlePost(){
    const {post} = {
      post: {
        title: title,
        content: content
      }
  }

  const newArticle = await fetch(`${publicRuntimeConfig.API_URL}/articles`, {
    method: "POST",
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjEyOTUzNDk3LCJleHAiOjE2MTU1NDU0OTd9.-LE5Dp6fMkojA9J7sdIXbY17_Bn2d0FE76uAw4MO_nI'
    },
    body: JSON.stringify(data)
})
  const articleResponse = await newArticle.json();
}


  return (
    <>
        <>
            <Container>
                <h2>Create article</h2>

                <form>
                    <input type="title" onChange={e => setTitle(e.target.value) } value={title} /><br />
                    <input type="content" onChange={e => setContent(e.target.value) } value={content} /><br />
                    <button type="button" onClick={() => handlePost() }>Post</button>
                </form>
            </Container>
        </>
    </>
  );
}

export async function getServerSideProps(ctx) {

  const jwt = parseCookies(ctx).jwt

  const res = await fetch(`${publicRuntimeConfig.API_URL}/create-articles`, {
    headers:  {
      Authorization: `Bearer ${jwt}`
    }
  })

  const data = await res.json()

  return {
    props: {
      data : data
    },
  };
}

export default CreateArticles;
