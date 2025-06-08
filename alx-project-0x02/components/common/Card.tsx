import { type CardProps } from "@/interfaces";
import React from "react";

const Card: React.FC<CardProps> = ({ id, title, content }) => {
  return (
    <div className="card p-2 rounded bg-gray-600 grid place-items-center justify-center" id={id}>
      <h2 className="">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card;