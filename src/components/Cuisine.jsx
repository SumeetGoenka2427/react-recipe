import { Globe } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Cuisine = ({ filterByArea }) => {
  const featuredAreas = [
    "American",
    "British",
    "Thai",
    "Indian",
    "Chinese",
    "Italian",
    "Russian",
  ];

  return (
    <div className="bg-gray-900/70 backdrop-blur-md border-b border-gray-800 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 py-3 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-3">
          {/* Label */}
          <div className="flex items-center text-base font-semibold text-yellow-400 shrink-0 pr-2">
            <Globe className="w-5 h-5 mr-1" />
            Global Cuisines
          </div>

          {/* Scrollable chips */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {featuredAreas.map((area) => (
              <Link
                key={area}
                to={`search/${area}`}
                onClick={() => filterByArea(area)}
                className="
                  px-5 py-1.5 text-sm bg-gray-800 text-gray-200
                  border border-gray-700 rounded-full
                  hover:bg-blue-600 hover:border-blue-600 hover:text-white
                  transition-all duration-200 ease-out
                  shadow-sm hover:shadow-blue-900/40
                  whitespace-nowrap select-none
                "
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
