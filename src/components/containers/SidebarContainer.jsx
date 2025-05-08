import React from "react";
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

const categoriesData = [
  "American",
  "British",
  "Canadian",
  "Chinese",
  "Croatian",
  "Dutch",
  "Egyptian",
  "Filipino",
  "American",
  "British",
  "Canadian",
  "Chinese",
  "Croatian",
  "Dutch",
  "Egyptian",
  "Filipino",
  "American",
  "British",
  "Canadian",
  "Chinese",
];

export const SidebarContainer = () => {
  return (
    <div className="flex flex-col p-2 gap-10">
      <SidebarListComponent title="Categories" data={categoriesData} />
      <SidebarListComponent title="Areas" data={areaData} />
    </div>
  );
};
