import { Search, Zap } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ handleSearch }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleSearch(input.trim());
      navigate(`search/${input}`);
      setInput("");
    }
  };

  return (
    <nav className="sticky top-0 z-20 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-extrabold tracking-wide text-white hover:text-blue-400 transition"
          >
            <Zap className="w-6 h-6 text-yellow-400" />
            <span className="text-blue-400">Pro</span>Chef
          </Link>

          {/* Desktop Search */}
          <form
            onSubmit={searchHandler}
            className="hidden sm:flex items-center w-full max-w-md ml-4"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search dishes, ingredients, cuisines..."
              className="w-full px-4 py-2 rounded-l-full bg-gray-900 text-gray-100 border border-gray-700
                focus:ring-2 focus:ring-blue-600 outline-none placeholder-gray-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-full transition flex items-center justify-center"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Mobile Search */}
        <form onSubmit={searchHandler} className="sm:hidden mt-3 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search recipes..."
            className="flex-1 px-4 py-2 rounded-l-full bg-gray-900 text-gray-100 border border-gray-700
              focus:ring-2 focus:ring-blue-600 outline-none placeholder-gray-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-full transition flex items-center justify-center"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
