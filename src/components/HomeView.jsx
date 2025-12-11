import React from "react";
import TrendingSlider from "./TrendingSlider";
import RecipeSlider from "./RecipeSlider";
import CategorySelection from "./CategorySelection";
import { API_URL } from "./useFetch";

const HomeView = ({ filterByCategory }) => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
      {/* Section 1 */}
      <section>
        <RecipeSlider
          title="Staff Curated Picks"
          fetchUrl={`${API_URL}search.php?f=c`}
        />
      </section>

      {/* Section 2 */}
      <section>
        <TrendingSlider
          title="Quick & Easy Meals"
          fetchUrl={`${API_URL}search.php?f=c`}
        />
      </section>

      {/* Section 3 */}
      <section>
        <CategorySelection filterByCategory={filterByCategory} />
      </section>
    </main>
  );
};

export default HomeView;
