import { toast } from "react-hot-toast";

import api from "../config/api";

export async function handleDelete({ id, setNotes, navigate }) {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this note?",
  );
  if (confirmDelete) {
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully.");
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      navigate("/");
    } catch (err) {
      console.error("Error deleting note:", err);
      toast.error("Failed to delete note.");
    }
  }
}
