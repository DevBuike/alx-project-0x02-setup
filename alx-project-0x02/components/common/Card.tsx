import { type CardProps } from "@/interfaces";
import React from "react";

const Card: React.FC<CardProps> = ({ id, title, content }) => {
  return (
    <div className="card" id={id}>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};
export default Card;