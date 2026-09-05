import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import { useEffect, useState } from "react";
import api from "./config/api";
const App = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
      } catch (err) {
        console.error("Error fetching notes:", err);
      }
    };
    fetchNotes();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home notes={notes} setNotes={setNotes} />} />
      <Route path="/create" element={<CreatePage setNotes={setNotes} />} />
      <Route
        path="/notes/:id"
        element={<NoteDetailPage setNotes={setNotes} />}
      />
    </Routes>
  );
};

export default App;
