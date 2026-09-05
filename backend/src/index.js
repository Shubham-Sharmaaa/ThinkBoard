import express from "express";
import dotenv from "dotenv";
import notesRouter from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import { ratelimiter } from "./middleware/ratelimit.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(ratelimiter);
app.use("/api/notes", notesRouter);
connectDB().then(() => {
  app.listen(process.env.PORT || 3001, () => {
    console.log("Server is running on port: ", process.env.PORT || 3001);
  });
});
