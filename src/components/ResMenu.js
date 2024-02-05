import React, { useState } from "react";
import { useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const ResMenu = () => {
  console.log("12");
  const [ResMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchData();
  }, []);
  console.log("2");
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    console.log("here");
    console.log(jsonData);
    // console.log(jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name)
    setResMenu(jsonData);
  };

  if (ResMenu === null) return <ShimmerUI />;

  const { name, costForTwo, cuisines } =
    ResMenu?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    ResMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || ResMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log("4");
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <h2>{costForTwo}</h2>
        <h3>{cuisines.join(",")}</h3>
      </div>
      <div>{/* <h2>{cuisines.join}</h2> */}</div>
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
