import { Grid } from "@mui/material";
import React from "react";
import BlogShow from "../Components/BlogShow";
import Header from '../Components/Header'
import useAuth from "../hooks/useAuth";

const blog = ({ posts }) => { 
 

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Grid container>
            {posts.map((data) => (
              <BlogShow key={data.id} data={data} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

blog.getLayout=function getLayout(page){
return(
  <>
  <Header/>
  {page}
  </>
)
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:5000/blogs");
  const posts = await res.json();



  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default blog;
