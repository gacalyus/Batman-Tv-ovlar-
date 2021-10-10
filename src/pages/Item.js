import React from "react";
import { Link } from "react-router-dom";

function Item({ image, name, average, id }) {
  return (
    <Link to={`/singleshow/${id}`} className="listItem">
      <img src={image} alt={name} />
      <div className="listItemInfo">
        <h4 className="infoName">{name}</h4>
        <h4 className="infoRaiting">{average}</h4>
      </div>
    </Link>
  );
}

export default Item;
