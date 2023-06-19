import express from "express";
import { connection } from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js"
const app = express();
dotenv.config();
app.get("/", (req, res) => {
    res.send("Home pe ho")
})
const port = 8000;
const UserName = process.env.db_userID;
const Password = process.env.db_Password;
connection(UserName, Password);
app.listen(port, () => {
    console.log(`Server is running successfully on port ${port}`);
})
DefaultData();