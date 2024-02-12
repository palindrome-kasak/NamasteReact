import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");
  const onlineStatusValue = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg mb-3">
      <div className="logo-container">
        <img className="w-100" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status : {onlineStatusValue ? "🟢" : "🔴"};</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          <button className="px-4"
            onClick={() => {
              if (btnNameReact == "login") {
                setbtnNameReact("logOut");
              } else {
                setbtnNameReact("login");
              }
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
