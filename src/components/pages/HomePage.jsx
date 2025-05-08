import React from "react";
import { RandomMealsContainer } from "../containers/RandomMealsContainer";
import MealsContainer from "../containers/MealsContainer";
import { SidebarContainer } from "../containers/SidebarContainer";

export const HomePage = () => {
  return (
    <div className="flex mt-[100px]">
      <SidebarContainer />
      <div className="flex flex-col gap-8">
        <RandomMealsContainer />
        <MealsContainer />
      </div>
    </div>
  );
};
