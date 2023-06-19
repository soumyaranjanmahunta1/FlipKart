import mongoose from "mongoose";

export const connection = async (UserName,Password) => {
  const URL =
    `mongodb+srv://${UserName}:${Password}@database.itbdpz3.mongodb.net/`;
  try {
    await mongoose.connect(URL);
    console.log("conncected with mongodb");
  } catch (err) {
    console.log(err.message);
  }
};
