import React, { useEffect, useState } from "react";
import { RandomMealsContainer } from "../containers/RandomMealsContainer";
import MealsContainer from "../containers/MealsContainer";
import { SidebarContainer } from "../containers/SidebarContainer";
import TopNavContainer from "../containers/TopNavContainer";

export const HomePage = () => {
  const [meals, setMeals] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [title, setTitle] = useState("Latest Meals");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    setTitle(`Meals with: ${event.target.value}`);

    // TODO: remove whitespace so you will display "Latest Meals" as title
    if (event.target.value === "") {
      setTitle(`Latest Meals`);
    }
  };

  const fetchData = (searchValue) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then((response) => response.json())
      .then((responseJSON) => setMeals(responseJSON.meals));
  };

  useEffect(() => {
    fetchData(searchValue);
  }, [searchValue]);

  return (
    <div className="flex">
      <TopNavContainer
        searchValue={searchValue}
        handleInputChange={handleInputChange}
      />
      <div className="flex mt-[100px]">
        <SidebarContainer />
        <div className="flex flex-col gap-8">
          <RandomMealsContainer nrOfRandomMeals={4} />
          <MealsContainer meals={meals} title={title} />
        </div>
      </div>
    </div>
  );
};
