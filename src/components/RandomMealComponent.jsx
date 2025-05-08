import React from "react";

export const RandomMealComponent = ({ mealName }) => {
  return (
    <div className="h-28 w-56 bg-green-300/25 p-2 rounded-xl">
      <p className="text-xs">Category name</p>
      <div className="px-2 font-mono">
        <p className="text-xs">Random Meal {mealName}</p>
      </div>
    </div>
  );
};
