import React, { useState } from "react";
import { useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResMenu = () => {
  const { resId } = useParams();
  const ResMenu = useRestaurantMenu(resId);
  
  if (ResMenu === null) return <ShimmerUI />;

  const { name, costForTwo, cuisines } =
    ResMenu?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    ResMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ||
    ResMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <h2>{costForTwo}</h2>
        <h3>{cuisines.join(",")}</h3>
      </div>
      <div>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} {"Rs.- "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
