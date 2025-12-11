import React from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL, useFetch } from "./useFetch";
import { BookOpen, ChevronLeft, Loader, Utensils } from "lucide-react";

const RecipeDetailView = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`${API_URL}lookup.php?i=${id}`);
  const meal = data?.meals?.[0];

  if (loading)
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Preparing your recipe card...
      </div>
    );

  if (!meal)
    return <p className="text-center text-gray-300">Recipe not found.</p>;

  // Extract Ingredients & Measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim()) {
      ingredients.push({
        ingredient: ing.trim(),
        measure: measure?.trim() || "",
      });
    }
  }

  // Format instructions
  const instructions = meal.strInstructions
    ?.split(".")
    ?.map((step) => step.trim())
    ?.filter((step) => step.length > 0);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back Button */}
      <Link
        to="/"
        className="text-yellow-400 hover:text-yellow-300 flex items-center mb-8 text-lg font-medium"
      >
        <ChevronLeft className="w-6 h-6 mr-1" />
        Back to Home
      </Link>

      {/* Main Card */}
      <div className="bg-gray-900 p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-800">
        {/* Flex Layout */}
        <div className="lg:flex lg:space-x-10">
          {/* IMAGE + TITLE */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl font-black text-gray-100 mb-6 leading-tight">
              {meal.strMeal}
            </h1>

            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full max-w-md rounded-2xl shadow-xl border border-gray-800 mx-auto object-cover"
            />
          </div>

          {/* INGREDIENTS */}
          <div className="lg:w-1/2 bg-gray-800 rounded-2xl shadow-inner border border-gray-700 p-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6 flex items-center border-b border-gray-700 pb-3">
              <Utensils className="w-7 h-7 mr-3 text-blue-500" />
              Key Ingredients
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {ingredients.map((item, index) => (
                <li key={index} className="flex text-gray-300 text-base">
                  <span className="text-blue-400 font-bold mr-2">{">"}</span>
                  <span className="font-semibold text-white mr-1">
                    {item.measure}
                  </span>
                  {item.ingredient}
                </li>
              ))}
            </ul>

            {/* TAGS */}
            <div className="mt-8 pt-4 border-t border-gray-700 flex flex-wrap gap-3">
              <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                {meal.strCategory}
              </span>
              <span className="bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                {meal.strArea}
              </span>
            </div>
          </div>
        </div>

        {/* INSTRUCTIONS */}
        <div className="mt-10 pt-8 border-t border-gray-700">
          <h2 className="text-3xl font-bold text-gray-100 mb-8 flex items-center">
            <BookOpen className="w-7 h-7 mr-3 text-blue-500" />
            Detailed Preparation Steps
          </h2>

          <ol className="space-y-6">
            {instructions?.map((step, index) => (
              <li
                key={index}
                className="text-base sm:text-lg leading-relaxed bg-gray-800 p-5 rounded-xl border border-blue-500/20 hover:bg-gray-700/50 transition shadow-lg"
              >
                <span className="font-extrabold text-yellow-400 mr-3 text-xl">
                  {index + 1}.
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
};

export default RecipeDetailView;
