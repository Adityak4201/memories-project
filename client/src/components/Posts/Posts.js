import React from "react";
import { Grid } from "@mui/material";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <h1>Posts</h1>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      />
      <Post />
      <Post />
    </>
  );
};

export default Posts;
