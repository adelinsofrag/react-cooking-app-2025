import React from "react";

export const SidebarListComponent = ({ title, data }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold font-serif">{title}</h2>
      <div className="flex flex-col gap-1">
        {data &&
          data.map((area) => (
            <p className="rounded-full bg-green-300/25 text-green-900 text-sm px-2">
              {area}
            </p>
          ))}
      </div>
    </div>
  );
};
