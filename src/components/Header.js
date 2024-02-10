import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus'
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");
   const onlineStatusValue = useOnlineStatus();
  return (
    
    <div className="header">
      <div className="logo-container">
        <img className="logo " src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status : {onlineStatusValue?"🟢":"🔴"};
          </li>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>  <Link to="/about">About Us</Link></li>
          <li>  <Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="loginBtn"
            onClick={() => {
              if (btnNameReact=="login") {
                setbtnNameReact("logOut")
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
