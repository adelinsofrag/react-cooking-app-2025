import React from "react";
import { RandomMealComponent } from "../RandomMealComponent";

export const RandomMealsContainer = () => {
  return (
    <div className="flex w-full justify-around gap-8">
      <RandomMealComponent mealName={"Random"} />
      <RandomMealComponent mealName={"Another Random"} />
      <RandomMealComponent mealName={"Another"} />
      <RandomMealComponent mealName={"Another Random"} />
    </div>
  );
};
