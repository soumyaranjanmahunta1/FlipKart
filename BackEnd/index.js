import express, { Router } from "express";
import { connection } from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js"
import router from "./Routes/route.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
dotenv.config();
// app.get("/", (req, res) => {
//     res.send("Home pe ho")
// })
app.use(cors());
app.use(bodyParser.json({extend:true}));
app.use(bodyParser.urlencoded({extend:true}));
app.use("/", router);
const port = 8000;
const UserName = process.env.db_userID;
const Password = process.env.db_Password;
connection(UserName, Password);
app.listen(port, () => {
    console.log(`Server is running successfully on port ${port}`);
})
DefaultData();