import React from "react";
import TrendingSlider from "./TrendingSlider";
import RecipeSlider from "./RecipeSlider";
import CategorySelection from "./CategorySelection";
import { API_URL } from "./useFetch";
const HomeView = ({ filterByCategory }) => {
  return (
    <>
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <RecipeSlider
          title="Staff Curated Picks"
          fetchUrl={`${API_URL}search.php?f=c`}
        />

        <TrendingSlider
          title="Quick & Easy Meals"
          fetchUrl={`${API_URL}search.php?f=c`}
        />

        <CategorySelection filterByCategory={filterByCategory} />
      </main>
    </>
  );
};

export default HomeView;
