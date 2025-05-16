import React from "react";
import { RandomMealComponent } from "../RandomMealComponent";

// const randomMealsComponents = Array.from(
//   { length: nrOfRandomMeals },
//   (_, index) => {
//     return <RandomMealComponent key={index} mealName={"Random " + index} />;
//   }
// );

export const RandomMealsContainer = ({ nrOfRandomMeals = 4 }) => {
  const randomMealsComponents = [];
  for (let i = 0; i < nrOfRandomMeals; i++) {
    randomMealsComponents.push(
      <RandomMealComponent key={i} mealName={"Random " + i} />
    );
  }

  return (
    <div className="flex w-full justify-around gap-8">
      {randomMealsComponents}
    </div>
  );
};
