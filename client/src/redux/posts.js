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

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchAll: (state, action) => {
      return state;
    },
    create: (state, action) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

console.log(postsSlice.actions);

export const postsActions = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
