import React, { ReactNode, useState } from "react";
interface Props {
  // children: ReactNode;
  onClick: () => void;
  // onClose: () => void;
  active: " is-active" | "";
}

const Burger = ({ onClick, active }: Props) => {
  return (
    <div
      className={"hamburger hamburger--3dy-r" + active}
      tabIndex={0}
      aria-label="Menu"
      role="button"
      aria-controls="navigation"
      onClick={onClick}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </div>
  );
};

export default Burger;
