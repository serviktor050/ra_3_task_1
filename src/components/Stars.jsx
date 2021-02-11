import React from "react";
import Star from "./Star";

export default function Stars(props) {
  const { count } = props;
  const starsArray = [];

  if (count < 1 || count > 5 || !(typeof count === "number")) {
    return null;
  }

  for (let i = 0; i < count; i += 1) {
    starsArray.push(1);
  }

  return (
    <ul className="card-body-stars">
      {starsArray.map((star, index) => (
        <li key={index}>
          <Star />
        </li>
      ))}
    </ul>
  );
}
