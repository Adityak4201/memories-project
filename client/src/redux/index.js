import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { postsReducer } from "./posts";

const store = configureStore({
  reducer: postsReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
