import React, { useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { createPostThunk } from "../../redux/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setPostData({ ...postData, [e.target.name]: e.target.value });

  const clear = () =>
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPostThunk(postData));
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={handleChange}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={handleChange}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={handleChange}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={handleChange}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="medium"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
