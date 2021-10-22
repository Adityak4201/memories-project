import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectMongoDB from "./db/connect.js";
import postsRouter from "./routes/posts.js";

const main = async () => {
  const app = express();
  dotenv.config();
  const port = process.env.PORT || 4000;
  connectMongoDB();
  app.use(express.json({ limit: "30mb", extended: true }));
  app.use(express.urlencoded({ limit: "30mb", extended: true }));
  app.use(cors());

  app.get("/", function (req, res) {
    res.send("Server is up and running");
  });

  app.use("/posts", postsRouter);

  app.listen(port, () => {
    console.log("Server Running at port", port);
  });
};

main();
