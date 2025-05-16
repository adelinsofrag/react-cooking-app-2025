import React from "react";
import placeholderImage from "./../assets/react.svg";
import { Link } from "react-router";

export const MealComponent = ({
  strMeal,
  strMealThumb = placeholderImage,
  strArea,
  idMeal,
}) => {
  return (
    <Link to={`/meal/${idMeal}`}>
      <div className="ring-1 ring-zinc-300 rounded-2xl p-4">
        <div className="flex items-center justify-start gap-4">
          <div className="shrink-0">
            <img
              alt=""
              className="size-12 shrink-0 rounded-full bg-gray-950/5 outline -outline-offset-1 outline-gray-950/10 "
              src={strMealThumb}
            />
          </div>
          <div className="flex flex-col truncate">
            <span className="text-xs font-medium text-gray-950 ">
              {strArea}
            </span>
            <span className="truncate text-sm/6 text-gray-500 ">{strMeal}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
