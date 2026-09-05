import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../config/api";
import toast from "react-hot-toast";
import { handleDelete } from "../util/function";
export default function NoteDetailPage({ setNotes }) {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchNote(id) {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (err) {
        console.error("Error fetching note:", err);
      }
    }
    fetchNote(id);
  }, [id]);
  async function Delete(e) {
    e.preventDefault();
    e.stopPropagation();
    await handleDelete({ id, setNotes, navigate });
  }
  async function handleUpdate(e) {
    e.preventDefault();
    try {
      const res = await api.put(`/notes/${id}`, {
        title: note.title,
        content: note.content,
      });
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      setNotes((prevNotes) => [...prevNotes, res.data]);
      setNote(res.data);
      toast.success("Note updated successfully.");
    } catch (err) {
      console.error("Error updating note:", err);
      toast.error("Failed to update note.");
    }
  }
  console.log("Note ID:", id); // Log the note ID to the console
  return (
    <div>
      {!note ? (
        <p>Loading</p>
      ) : (
        <div className="min-h-screen bg-[#0d0d0d] text-gray-200 px-6 py-8">
          <div className="max-w-[900px] mx-auto ">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-10">
              <Link
                to="/"
                className="flex items-center gap-2 text-xs text-gray-300"
              >
                <span className="text-base">←</span>
                Back to Notes
              </Link>

              <button
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-red-500 text-red-500 text-[11px] font-semibold"
                onClick={Delete}
              >
                <span>♜</span>
                Delete Note
              </button>
            </div>

            {/* Form */}
            <form
              className="bg-[#151111] rounded-lg px-6 py-7"
              onSubmit={handleUpdate}
            >
              {/* Title */}
              <div className="mb-7">
                <label className="block text-[11px] text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="noteTitle"
                  value={note?.title || ""}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                  className="w-full h-10 rounded-full border border-[#383333] bg-transparent px-4 text-xs text-gray-300 outline-none"
                />
              </div>
              <label className="block text-[11px] text-gray-300 mb-2">
                Content
              </label>

              <textarea
                name="noteContent"
                value={note?.content || ""}
                onChange={(e) => setNote({ ...note, content: e.target.value })}
                className="w-full h-40 resize-none rounded-2xl border border-[#383333] bg-transparent px-4 py-3 text-xs text-gray-300 outline-none"
              />

              <div className="flex justify-end mt-5">
                <button className="px-5 py-2.5 rounded-full bg-emerald-500 text-black text-[11px] font-semibold">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
