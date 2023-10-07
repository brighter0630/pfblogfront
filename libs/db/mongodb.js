import mongoose from "mongoose";

const connectDB = async (req) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
