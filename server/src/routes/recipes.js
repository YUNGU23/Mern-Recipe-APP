import express from "express";
import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";
import { verifyToken } from "./users.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await RecipeModel.find({}); // find all of the documents in that collection
    res.json(response); // send back the response data to frontend
  } catch (err) {
    res.json(err);
  }
});

router.post("/", verifyToken, async (req, res) => {
  const recipe = new RecipeModel(req.body);
  try {
    const response = await recipe.save(); // find all of the documents in that collection
    res.json(response); // send back the response data to frontend
  } catch (err) {
    res.json(err);
  }
});

router.put("/", verifyToken, async (req, res) => {
  try {
    const recipe = await RecipeModel.findById(req.body.recipeID); // find recipe by recipeID
    const user = await UserModel.findById(req.body.userID); // find user by userID
    user.savedRecipes.push(recipe);
    await user.save();
    res.json({ savedRecipes: user.savedRecipes }); // send back the response data to frontend
  } catch (err) {
    res.json(err);
  } 
});

router.get("/savedRecipes/ids/:userID", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    res.json({ savedRecipes: user?.savedRecipes });
  } catch (err) {
    res.json(err);
  }
});

router.get("/savedRecipes/:userID", async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.userID);
      const savedRecipes = await RecipeModel.find({
        _id: { $in: user.savedRecipes },    // find id in user.savedRecipes
      });
      res.json({ savedRecipes });
    } catch (err) {
      res.json(err);
    }
  });

export { router as recipeRouter };



