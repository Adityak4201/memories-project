import axios from "axios";

// const url = "http://localhost:4000/posts";
const url =
  "https://4000-adityak4201-memoriesproj-ou99jvaezru.ws-us27.gitpod.io/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, postData) =>
  axios.patch(`${url}/${id}`, postData);
