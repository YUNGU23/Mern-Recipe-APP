import express from "express";      // serve as a framework to create our API
import cors from "cors";            // set rules between frontend and backend
import mongoose from "mongoose";    // alloow us write and update data in mongoDB

import { userRouter } from "./routes/users.js"; // import userRouter from users.js
import { recipeRouter } from "./routes/recipes.js"; 

const app = express();

app.use(express.json());    // when send data from frontend, it will convert it into json instead of every single request may created
app.use(cors()); // solve many issues when trying to make that API request from the frontend

app.use("/auth", userRouter);   // store userRouter request in /auth
app.use("/recipes", recipeRouter);

mongoose.connect("mongodb+srv://nerokucn:nerokucn123@recipes.axfnhoh.mongodb.net/recipes?retryWrites=true&w=majority");


app.listen(3001, () => console.log("SERVER STARTED!")); // basicaly tells our API  to start