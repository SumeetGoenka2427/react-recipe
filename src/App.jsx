import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RecipeDetailView from "./components/RecipeDetailView";
import Cuisine from "./components/Cuisine";
import HomeView from "./components/HomeView";
import SearchView from "./components/SearchView";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

const App = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const filterRecipe = useCallback(async (query, filterType) => {
    setSearchResult([]);
    setSearchLoading(true);
    try {
      const res = await fetch(`${API_URL}filter.php?${filterType}=${query}`);
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      const result = await res.json();
      setSearchResult(result?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  }, []);

  const filterByCategory = useCallback(
    (category) => {
      filterRecipe(category, "c");
    },
    [filterRecipe]
  );

  const filterByArea = useCallback(
    (area) => {
      filterRecipe(area, "a");
    },
    [filterRecipe]
  );

  const handleSearch = useCallback(async (query) => {
    setSearchResult([]);
    setSearchLoading(true);
    try {
      const res = await fetch(`${API_URL}search.php?s=${query}`);
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      const result = await res.json();
      setSearchResult(result?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  }, []);
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-950 text-green-100">
          <Navbar handleSearch={handleSearch} />

          <div className="max-w-6xl mx-auto px-4 py-4">
            <Cuisine filterByArea={filterByArea} />

            <Routes>
              <Route
                path="/"
                element={<HomeView filterByCategory={filterByCategory} />}
              />
              <Route path="/recipe/:id" element={<RecipeDetailView />} />
              <Route
                path="/search/:query"
                element={
                  <SearchView meals={searchResult} loading={searchLoading} />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
