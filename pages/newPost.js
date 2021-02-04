import Header from '../components/header'

import React from 'react';
import { Grid } from 'semantic-ui-react';

import PostForm from '../components/PostForm';

// import 'semantic-ui-css/semantic.min.css';

function NewPost() {
    return (
      <div>
        <Header />
        <div className="flex items-center justify-center">
        <Grid columns={3}>
          <Grid.Row className="page-title">
            <h1>Input data here (this function currently does not work):</h1>
          </Grid.Row>
          <Grid.Row className="article-creator">
            <PostForm />
          </Grid.Row>
        </Grid>
        </div>
      </div>
    );
  }
  
  export default NewPost;