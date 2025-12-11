import React from "react";
import Slider from "react-slick";
import { useFetch } from "./useFetch";
import RecipeCard from "./RecipeCard";
import { Clock, Loader } from "lucide-react";

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);
  const meals = data?.meals || [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1280, // XL
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024, // LG
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // MD
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, // SM
        settings: { slidesToShow: 1 },
      },
    ],
  };

  if (loading)
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Loading {title}...
      </div>
    );

  if (error)
    return (
      <p className="text-red-500 text-center py-4">Error loading recipes</p>
    );

  return (
    <section className="mx-auto">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-100 mb-5 tracking-tight flex items-center gap-3">
        <Clock className="w-6 h-6 text-blue-500" />
        {title}
      </h2>

      {/* Slider Container */}
      <div className="px-2 sm:px-4 lg:px-6">
        <Slider {...settings}>
          {meals.map((meal) => (
            <div key={meal.idMeal} className="px-2 sm:px-3 lg:px-4">
              <RecipeCard meal={meal} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecipeSlider;
