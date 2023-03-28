import React from 'react';
import { useQuery } from '@apollo/client';
import { Grid } from '@mui/material';
import { GET_BLOG_INFO } from '../../graphql/queries';
import CardEL from '../shared/CardEL';

function Blogs() {
    const { loading, data, errors } = useQuery(GET_BLOG_INFO);
    console.log({ loading, data, errors });
    
    if(loading)return <h4>Loading ...</h4>
    if(errors)return <h4>Errors...</h4>

  return (
    <Grid container spacing={2}>
      {data.posts.map(post => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEL {...post} />
        </Grid>
      ))}
     </Grid>
  )
}

export default Blogs;