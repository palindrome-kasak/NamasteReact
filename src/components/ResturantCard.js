import { CON_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  return (
    <div className="border-4">
      <img
        alt="res-logo"
        className="res-logo"
        src={CON_URL + resData.info.cloudinaryImageId}
      />
      <h3> {resData.info.name} </h3>
      <h3> {resData.info.cuisines.join(", ")}</h3>
      <h3>{resData.info.avgRating} star</h3>
      <h4>Avg Time: {resData.info.sla.deliveryTime} min</h4>
    </div>
  );
};

export default ResturantCard;
