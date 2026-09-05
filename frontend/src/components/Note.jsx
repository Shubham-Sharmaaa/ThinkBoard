import { Link, useNavigate } from "react-router";
import { handleDelete } from "../util/function";

export default function Note({ note, setNotes }) {
  const navigate = useNavigate();
  const id = note._id;
  async function Delete() {
    await handleDelete({ id, setNotes, navigate });
  }
  return (
    <Link
      to={`/notes/${note._id}`}
      className="w-full min-h-[150px] bg-[#171111] border-t-2 border-emerald-400 rounded-lg px-5 py-4 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-base font-semibold text-gray-200">{note.title}</h3>

        <p className="text-sm text-gray-400 mt-3">{note.content}</p>
      </div>

      <div className="flex items-center justify-between mt-6">
        <span className="text-xs text-gray-400">
          {new Date(note.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>

        <div className="flex items-center gap-3">
          {/* Edit */}
          <button className="text-gray-400 hover:text-gray-200">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
          </button>

          {/* Delete */}
          <button className="text-red-500 hover:text-red-400" onClick={Delete}>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="M19 6l-1 14H6L5 6" />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
}
