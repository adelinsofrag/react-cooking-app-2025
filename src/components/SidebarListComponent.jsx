import React from "react";

export const SidebarListComponent = ({ title, data }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold font-serif">{title}</h2>
      <div className="flex flex-col gap-1">
        {data &&
          data.map((item, index) => (
            <div
              key={item.idCategory}
              class="flex items-center justify-start gap-1 py-1 hover:bg-zinc-200 transition-all duration-700"
            >
              <div class="shrink-0">
                <img
                  alt=""
                  src={item.strCategoryThumb}
                  class="h-10 w-auto shrink-0 rounded-full"
                />
              </div>
              <div class="flex flex-col truncate">
                <span class="text-sm font-medium text-gray-950 ">
                  {item.strCategory}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
