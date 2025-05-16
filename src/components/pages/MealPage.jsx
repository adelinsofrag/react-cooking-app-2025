import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const MealPage = () => {
  let { mealId } = useParams();
  const [data, setData] = useState({});

  const fetchData = (mealId) => {
    fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        setData(responseJSON.meals);
      });
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setData(responseJSON.meals[0]);
      });
  }, [mealId]);

  return (
    <>
      <div>{data.idMeal}</div>
      <div>{data.strArea}</div>
      <div> {data.strMeal}</div>
      <img src={data.strMealThumb}></img>
    </>
  );
};
