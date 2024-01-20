import ResturantCard from './ResturantCard';
import resObj from '../utils/mockData'



const Body = () => {
    return (
      <div className="body">
        <div className="search">search</div>
        <div className="res-container">
          {/* resturant card */}
          {resObj.map((restur) => (
            <ResturantCard key={restur.info.id} resData={restur} />
          ))}
        </div>
      </div>
    );
  };

export default Body;