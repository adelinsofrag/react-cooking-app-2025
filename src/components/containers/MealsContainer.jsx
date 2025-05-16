import React from "react";
import { MealComponent } from "../MealComponent";
import { MealsTitleComponent } from "../MealsTitleComponent";

export default function MealsContainer({ meals, title }) {
  return (
    <div className="w-full">
      <MealsTitleComponent text={title} />
      <div className="grid grid-cols-3 gap-2">
        {meals &&
          meals.map((meal, index) => (
            <MealComponent
              key={meal.idMeal}
              strMeal={meal.strMeal}
              strArea={meal.strArea}
              strMealThumb={meal.strMealThumb}
              idMeal={meal.idMeal}
            />
          ))}
      </div>
    </div>
  );
}
