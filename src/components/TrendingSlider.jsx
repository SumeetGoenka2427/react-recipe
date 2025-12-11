import React from "react";
import Slider from "react-slick";
import { useFetch } from "./useFetch";
import { Clock, Loader } from "lucide-react";
import { Link } from "react-router-dom";

const TrendingSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);
  const meals = data?.meals || [];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } }, // XL
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // LG
      { breakpoint: 768, settings: { slidesToShow: 2 } }, // MD
      { breakpoint: 640, settings: { slidesToShow: 2 } }, // SM
      { breakpoint: 480, settings: { slidesToShow: 2 } }, // XS
    ],
  };

  if (loading)
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Loading {title}...
      </div>
    );

  if (error) return <p>Error loading recipes</p>;

  return (
    <section className="mx-auto">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-100 mb-6 flex items-center gap-3">
        <Clock className="w-6 h-6 text-blue-500" /> {title}
      </h2>

      <div className="w-full mx-auto overflow-hidden px-2 sm:px-4">
        <Slider {...settings}>
          {meals.map((meal) => (
            <div key={meal.idMeal} className="px-2 sm:px-3">
              <Link to={`/recipe/${meal.idMeal}`}>
                <div
                  className="relative bg-gray-900 rounded-xl shadow-xl shadow-black/40 overflow-hidden
                  group transition duration-300 cursor-pointer border border-gray-800 hover:shadow-blue-500/40"
                >
                  <div className="flex justify-center items-center p-4">
                    <img
                      src={meal.strMealThumb}
                      className="h-24 w-24 rounded-xl border border-yellow-400 transition transform group-hover:scale-105"
                      alt={meal.strMeal}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrendingSlider;
