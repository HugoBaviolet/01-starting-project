import React from "react";
import "./CoreConcept.css";

//Can destructor using {} in parameter and use the same prop names eg {image, title, description} instead of (props)
export function CoreConcept({ image, description, title }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
