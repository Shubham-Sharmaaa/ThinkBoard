import express from "express";
import dotenv from "dotenv";
import notesRouter from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import { ratelimiter } from "./middleware/ratelimit.js";
import cors from "cors";
import path from "path";
dotenv.config();
const __dirname = path.resolve();
const app = express();
if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}

app.use(express.json());
app.use(ratelimiter);
app.use("/api/notes", notesRouter);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*splat}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(process.env.PORT || 3001, () => {
    console.log("Server is running on port: ", process.env.PORT || 3001);
  });
});
