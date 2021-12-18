import axios from "axios";

const url = "https://4000-scarlet-panda-ewj6minp.ws-us23.gitpod.io/posts";

export const fetchPosts = () => axios.get(url);
