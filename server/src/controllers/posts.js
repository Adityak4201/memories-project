import PostMessage from "../models/post.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    //   if(!postMessages)
    //     throw "No Posts Found";
    return res.status(200).json({ posts: postMessages });
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    return res.status(201).json({ post: newPost });
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
