import React from "react";

function SearchInputComponent(props) {
  return (
    <div className="flex items-center gap-4">
      <input
        className="px-4 py-2 bg-zinc-100 ring-1 ring-zinc-300 ring-offset-2 rounded-full w-lg"
        placeholder={props.placeholderValue}
      />
    </div>
  );
}

export default SearchInputComponent;
