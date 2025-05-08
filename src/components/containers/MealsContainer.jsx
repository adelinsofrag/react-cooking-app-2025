import React from "react";
import { MealComponent } from "../MealComponent";
import { MealsTitleComponent } from "../MealsTitleComponent";

const mealData = [
  { title: "Meal American", area: "American" },
  { title: "Meal British", area: "British" },
  { title: "Meal Canadian", area: "Canadian" },
  { title: "Meal Chinese", area: "Chinese" },
  { title: "Meal Croatian", area: "Croatian" },
  { title: "Meal Dutch", area: "Dutch" },
  { title: "Meal Egyptian", area: "Egyptian" },
  { title: "Meal Filipino", area: "Filipino" },
  { title: "Meal French", area: "French" },
  { title: "Meal Greek", area: "Greek" },
  { title: "Meal Indian", area: "Indian" },
  { title: "Meal Irish", area: "Irish" },
  { title: "Meal Italian", area: "Italian" },
  { title: "Meal Jamaican", area: "Jamaican" },
  { title: "Meal Japanese", area: "Japanese" },
  { title: "Meal Kenyan", area: "Kenyan" },
  { title: "Meal Malaysian", area: "Malaysian" },
  { title: "Meal Mexican", area: "Mexican" },
  { title: "Meal Moroccan", area: "Moroccan" },
  { title: "Meal Polish", area: "Polish" },
  { title: "Meal Portuguese", area: "Portuguese" },
  { title: "Meal Russian", area: "Russian" },
  { title: "Meal Spanish", area: "Spanish" },
  { title: "Meal Thai", area: "Thai" },
  { title: "Meal Tunisian", area: "Tunisian" },
  { title: "Meal Turkish", area: "Turkish" },
  { title: "Meal Ukrainian", area: "Ukrainian" },
  { title: "Meal Uruguayan", area: "Uruguayan" },
  { title: "Meal Vietnamese", area: "Vietnamese" },
];

export default function MealsContainer() {
  return (
    <div className="w-full">
      <MealsTitleComponent text="Latest Meals" />
      <div className="grid grid-cols-3 gap-2">
        {mealData &&
          mealData.map((meal) => (
            <MealComponent title={meal.title} area={meal.area} />
          ))}
      </div>
    </div>
  );
}
