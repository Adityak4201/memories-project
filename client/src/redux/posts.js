import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

const initialState = [];

export const getPosts = createAsyncThunk("users/fetchAll", async () => {
  try {
    const { data } = await api.fetchPosts();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error.response);
  }
});

export const createPostThunk = createAsyncThunk(
  "posts/create",
  async (post) => {
    try {
      const { data } = await api.createPost(post);
      return data;
    } catch (err) {
      console.log(err.response);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createPostThunk.fulfilled, (state, action) => {
      return state;
    });
  },
});

// console.log(postsSlice.actions);

export const postsActions = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
