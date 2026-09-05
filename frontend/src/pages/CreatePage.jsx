import { ArrowLeftIcon } from "lucide-react";
import api from "../config/api";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
export default function CreatePage({ setNotes }) {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const noteTitle = event.target.noteTitle.value;
    const noteContent = event.target.noteContent.value;

    try {
      const res = await api.post("/notes", {
        title: noteTitle,
        content: noteContent,
      });
      setNotes((prevNotes) => [...prevNotes, res.data]);
      toast.success("Note Created");
      navigate("/");
    } catch (err) {
      console.log("error", err);
      toast.error("Couldnt create A note");
    }
  }
  return (
    <div className="relative h-screen bg-black w-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-96 h-40 bg-emerald-500/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-96 h-40 bg-emerald-500/10 blur-3xl rounded-full" />
      </div>
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center gap-4 mt-4 w-[70%] md:w-[60%] mx-auto">
          <div className="flex items-center justify-start gap-2 text-primary cursor-pointer w-full pl-6">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeftIcon /> <p>Back to Home</p>
            </Link>
          </div>
          <div className="card bg-[#181211] border border-emerald-950 w-full max-w-lg">
            <div className="card-title pt-4 px-4 text-2xl">Create New Note</div>
            <div className="card-body">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label htmlFor="noteTitle" className="text-secondary text-lg">
                  Note Title
                </label>
                <input
                  type="text"
                  id="noteTitle"
                  placeholder="Note Title"
                  className="bg-gray-800 rounded-md p-2 text-gray-300 placeholder:text-gray-500 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <label htmlFor="noteContent" className="text-secondary text-lg">
                  Content
                </label>
                <textarea
                  id="noteContent"
                  placeholder="Write your note here..."
                  className="bg-gray-800 rounded-md p-2 text-gray-300 placeholder:text-gray-500 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button type="submit" className="btn btn-primary mt-4 self-end">
                  Create Note
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
