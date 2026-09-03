import express from "express";
import {
  getNotes,
  postNotes,
  putNotes,
  deleteNotes,
  getNoteById,
} from "../controller/notesController.js";
const router = express();

router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/", postNotes);
router.put("/:id", putNotes);
router.delete("/:id", deleteNotes);

export default router;
