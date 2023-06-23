import express from "express";
// import usersignUp from "../Controller/userController";
import { getproducts } from "../Controller/ProductController.js";
import { usersignUp, userLogin } from "../Controller/userController.js";
const router = express.Router();

router.post("/signup", usersignUp);
router.post("/login", userLogin);
router.get("/products", getproducts);
export default router;
