import mongoose from "mongoose";
import PostMessage from "../models/post.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    //   if(!postMessages)
    //     throw "No Posts Found";
    return res.json(postMessages);
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    return res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  // console.log(_id, post);

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  // console.log(updatedPost);
  res.json(updatedPost);
};
