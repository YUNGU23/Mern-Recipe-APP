import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  // req(reuest): getting data from whoerver made the API request to this endpoint, res(response) variable is used to send data to back to whoerver made that API request
  const { username, password } = req.body; // send API request including username and password from frontend
  const user = await UserModel.findOne({ username }); // confiem whether this username exists in databse

  if (user) {
    // if user exists in databse then print the message
    return res.json({ message: "Username already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10); // use bcrypt to hash password

  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save(); // save newUser to database

  res.json({ message: "User registered successfully" }); // print the message
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });         // find username in databse

    if (!user) {                       // if not found, print the message
        return res.json({ message: "User Doesn't Exist! "});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);  // if found, compare the password, and return True / False

    if (!isPasswordValid) {     // if not isPasswordValid, means password is not correct, print the message
        return res.json({message: "Username or Password is Incorrect! "});
    }
    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id });
});

export { router as userRouter };

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token,"secret", (err) => {
      if (err) return res.sendStatus(403);
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
 