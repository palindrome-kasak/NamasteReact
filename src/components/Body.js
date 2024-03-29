import ResturantCard from "./ResturantCard";
import ShimmerUI from "./ShimmerUI";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// super powerfull variable , react hook use State => it is a normal javascipt fucntion which is given to us by React => local state variable

const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  const [FileterlistOfRes, setFileterlistOfRes] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    console.log("done");
    setlistOfRes(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFileterlistOfRes(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  console.log(listOfRes);

  const useOnlineStatusValue = useOnlineStatus();
  if (useOnlineStatusValue === false) {
    return <div>
      <h1>you are offline!!!!!!!!!!!!!</h1>
    </div>
  };
  return listOfRes.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="border-pink-2px">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="searchBtn"
          onClick={() => {
            const FilteredSearchRes = listOfRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFileterlistOfRes(FilteredSearchRes);
          }}
        >
          search
        </button>
      </div>
      <div className="btn-div">
        <button
          className="filter-bt"
          onClick={() => {
            const FilteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRes(FilteredList);
          }}
        >
          top Rated res
        </button>
      </div>

      <div className="res-container">
        {/* resturant card */}
        {FileterlistOfRes.map((restur) => (
          <Link key={restur.info.id} to={"/res/" + restur.info.id}>
            <ResturantCard resData={restur} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
