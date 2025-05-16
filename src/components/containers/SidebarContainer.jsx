import React, { useEffect, useState } from "react";
import { SidebarListComponent } from "../SidebarListComponent";

const areaData = [
  "American",
  "British",
  "Canadian",
  "Chinese",
  "Croatian",
  "Dutch",
  "Egyptian",
  "Filipino",
];

export const SidebarContainer = () => {
  const [categories, setCategories] = useState([
    "American",
    "British",
    "Canadian",
  ]);

  const fetchDataCategories = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((response) => response.json())
      .then((responseJSON) => setCategories(responseJSON.categories));
  };

  useEffect(() => {
    fetchDataCategories();
  }, []);

  return (
    <div className="flex flex-col p-2 gap-10">
      <SidebarListComponent
        key="categories"
        title="Categories"
        data={categories}
      />
      <SidebarListComponent key="area" title="Areas" data={areaData} />
    </div>
  );
};
