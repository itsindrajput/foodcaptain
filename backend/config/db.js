import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://itsindrajput:U5gSJfi1BbruzAih@cluster0.3aw84bh.mongodb.net/food-order?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("DB Connected"));
};
