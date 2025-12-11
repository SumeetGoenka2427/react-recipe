import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`}>
      <div
        className="
          bg-gray-900 rounded-2xl overflow-hidden
          shadow-lg shadow-black/40 border border-gray-800
          hover:shadow-blue-600/40 hover:-translate-y-1
          transition-all duration-300 group
        "
      >
        {/* Image Wrapper */}
        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>

          {/* Category Tag */}
          {meal.strCategory && (
            <span
              className="
                absolute bottom-2 left-2
                bg-blue-600 text-white text-xs font-semibold
                px-3 py-1 rounded-full shadow-md
              "
            >
              {meal.strCategory}
            </span>
          )}
        </div>

        {/* Text Content */}
        <div className="p-4 text-center">
          <h3
            className="
              text-lg font-bold text-gray-100
              group-hover:text-blue-400 transition line-clamp-2
            "
          >
            {meal.strMeal}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
