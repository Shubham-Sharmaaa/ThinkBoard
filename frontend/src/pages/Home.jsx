import Layout from "../components/Layout";
import Note from "../components/Note";
export default function Home({ notes, setNotes }) {
  return (
    <div className="relative h-screen bg-black w-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-96 h-40 bg-emerald-500/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-96 h-40 bg-emerald-500/10 blur-3xl rounded-full" />
      </div>
      <div className="relative z-10">
        <Layout />
        <div className="w-[85%] md:w-[80%] lg:w-[75%] mx-auto mt-8">
          {notes.length === 0 ? (
            <p className="text-gray-500 text-center">No notes available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {notes.map((note) => (
                <Note note={note} setNotes={setNotes} key={note._id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
