import express from "express";
import cors from "cors";
import { connection } from "./config/db.js";
import dotenv from "dotenv";
import { gaurdMiddleware } from "./middleware/gaurd.middleware.js";
import { userRouter } from "./routes/user.route.js";
dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());

app.use("/user", userRouter);

// gaurd middleware for checking is user validated or not
app.use("/", gaurdMiddleware);

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
