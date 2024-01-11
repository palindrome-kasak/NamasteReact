import React from "react";
import ReactDOM from "react-dom/client";





const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3R11bv0hEzlRnv0lyOdGNCL3zE8HsFWElfjwU9NOIkw&s"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
// resturant container
const ResturantCard =()=>{
    return(
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9Ntx-Vo3iw2gJFXW3C_jF-Isqeyl-lKXAyrMb7htFnYT2qy221lKfjAESQ0C0B_j2Bo&usqp=CAU"/>
            <h3> 7th Heaven </h3>
        </div>
    )
}

const Body =()=>{
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                {/* resturant card */}
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
            </div>

        </div>
    )
}

const AppLayout = ()=>{
    return (
     <div className="app">
        <Header/>
        <Body/>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

