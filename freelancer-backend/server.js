import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import taskRoutes from "./routes/taskRoutes.js";

import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.use("/tasks", taskRoutes);

app.use(errorMiddleware);

app.listen(3001, () => {
  console.log("Server Running on Port 3001");
});