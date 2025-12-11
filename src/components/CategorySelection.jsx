import { Utensils } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const CategorySelection = ({ filterByCategory }) => {
  const featuredCategories = [
    "Chicken",
    "Dessert",
    "Seafood",
    "Vegetarian",
    "Breakfast",
    "Pasta",
    "Goat",
    "Pork",
    "Lamb",
  ];

  return (
    <section className="mt-12">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-100 mb-6 flex items-center gap-3">
        <Utensils className="w-6 h-6 text-blue-500" />
        Quick Filter by Prime Ingredient
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5">
        {featuredCategories.map((cat, index) => (
          <Link
            to={`search/${cat}`}
            key={index}
            onClick={() => filterByCategory(cat)}
            className="
              flex items-center justify-center
              bg-gray-900/60 backdrop-blur-sm
              border border-gray-700/70 rounded-xl
              px-4 py-3 sm:px-5 sm:py-4
              text-sm sm:text-base font-semibold text-gray-100
              transition-all duration-300
              hover:bg-blue-600/20 hover:border-blue-500 hover:text-blue-400
              hover:scale-105 hover:shadow-lg
            "
          >
            {cat}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySelection;
