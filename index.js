import express from "express";
import cors from "cors";
import { connection } from "./config/db.js";
import dotenv from "dotenv";
import { gaurdMiddleware } from "./middleware/gaurd.middleware.js";
import { userRouter } from "./routes/user.route.js";
import { recipeRouter } from "./routes/recipe.route.js";
import { mealRouter } from "./routes/meal.route.js";
import { momentRouter } from "./routes/moment.route.js";
dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

// gaurd middleware for checking is user validated or not
app.use("/", gaurdMiddleware);
app.use("/recipes", gaurdMiddleware, recipeRouter);
app.use("/meals", gaurdMiddleware, mealRouter);
app.use("/moments", gaurdMiddleware, momentRouter);

// server is runnig
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("db connection successfull");
  } catch (err) {
    console.log("db connection failed", err);
  } finally {
    console.log(`port is running on ${PORT}`);
  }
});
