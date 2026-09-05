import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";
export default function Layout() {
  return (
    <div className="flex justify-around items-center h-12.5 bg-[#110D0E]">
      <h1 className=" text-primary text-2xl text-bold">ThinkBoard</h1>
      <div className="flex justify-center gap-2">
        <Link to="/create" className="btn btn-primary">
          <PlusIcon /> New Note
        </Link>
      </div>
    </div>
  );
}
