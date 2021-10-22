import mongoose from "mongoose";

const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Connected to Database 🌱"));
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectMongoDB;
