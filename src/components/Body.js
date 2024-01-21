import ResturantCard from "./ResturantCard";
import resObj from '../utils/mockData'
import { useState } from "react";

// super powerfull variable , react hook use State => it is a normal javascipt fucntion which is given to us by React => local state variable

const Body = () => {
  const [listOfRes, setlistOfRes] = useState(resObj);
  return (
    <div className="body">
      {/* <div className="search">search</div> */}
      <div className="btn-div">
        <button className="filter-bt" onClick={ ()=>{
          const FilteredList = listOfRes.filter((res)=>res.info.avgRating>4);
          setlistOfRes(FilteredList);
        }
        }>
          top Rated res
        </button>
      </div>

      <div className="res-container">
        {/* resturant card */}
        {listOfRes.map((restur) => (
          <ResturantCard key={restur.info.id} resData={restur} />
        ))}
      </div>
    </div>
  );
};

export default Body;
