import Note from "../model/Notes.js";
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};
export const postNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }
    const note = await Note.create({ title, content });
    res.status(201).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};
export const putNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true,
      },
    );
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};
export const deleteNotes = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};
