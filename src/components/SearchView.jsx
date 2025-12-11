import { ChevronLeft, Loader } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const SearchView = ({ meals, loading }) => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back */}
      <Link
        to="/"
        className="text-yellow-400 hover:text-yellow-300 flex items-center mb-8
        font-medium text-lg transition"
      >
        <ChevronLeft className="w-6 h-6 mr-2" />
        Back to Home
      </Link>

      {/* Loading UI */}
      {loading && (
        <div className="text-center py-10 text-gray-300">
          <Loader className="animate-spin inline-block mr-2 text-blue-400" />
          Searching recipes...
        </div>
      )}

      {/* Results */}
      {!loading && meals.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {meals.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}

      {/* No Results */}
      {!loading && meals.length === 0 && (
        <div className="text-center py-20 text-gray-400 text-xl">
          No recipes found. Try a different search.
        </div>
      )}
    </main>
  );
};

export default SearchView;
