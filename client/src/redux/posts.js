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

export const updatePostThunk = createAsyncThunk(
  "posts/update",
  async (post) => {
    try {
      // console.log(post);
      const { data } = await api.updatePost(post._id, post);
      return data;
    } catch (err) {
      console.log(err.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      return action.payload;
    },
    [createPostThunk.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [updatePostThunk.fulfilled]: (state, action) => {
      const index = state.findIndex((post) => post._id === action.payload._id);
      state[index] = action.payload;
    },
  },
});

// console.log(postsSlice.actions);

export const postsActions = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
