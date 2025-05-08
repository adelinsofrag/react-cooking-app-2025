import React from "react";
import logoSRC from "./../assets/vite.svg";

export const LogoComponent = () => {
  return (
    <div className="flex items-center gap-4">
      <img src={logoSRC} alt="" />
    </div>
  );
};
