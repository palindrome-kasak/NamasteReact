import React, { useState , useEffect} from "react";
import { MENU_API } from './constants'

const useRestaurantMenu = (resId)=>{
    const [ResMenu, setResMenu] = useState(null);
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const jsonData = await data.json();
        console.log("here");
        console.log(jsonData);
        // console.log(jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name)
        setResMenu(jsonData);
      };
    return ResMenu 
}
export default useRestaurantMenu