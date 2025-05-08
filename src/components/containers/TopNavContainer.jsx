import React from "react";
import SearchInputComponent from "../SearchInputComponent";
import { LogoComponent } from "../LogoComponent";
import { AddToFavoritesButtonComponent } from "../AddToFavoritesButtonComponent";

export default function MealsContainer() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10">
      <div className="bg-white">
        <div className="flex h-14 items-center justify-between gap-8 px-4">
          <LogoComponent />
          <SearchInputComponent placeholderValue="Start typing" />
          <AddToFavoritesButtonComponent />
        </div>
      </div>
    </div>
  );
}
