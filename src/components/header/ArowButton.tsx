import React, { ReactNode, useState } from "react";
interface Props {
  // children: ReactNode;
  onClick: () => void;
  // onClose: () => void;
  active: " arrow_up" | "";
}

const ArowButton = ({ onClick, active }: Props) => {
  return <button className={"arrow" + active} onClick={onClick}></button>;
};

export default ArowButton;
