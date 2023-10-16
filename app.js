import React from "react";
import ReactDOM from "react-dom/client";

// React element==> object

const jsxHeading = <h1 id="heading"> namste using jsx</h1>

// React functional compenent
const Title =()=>{
    <h1 className="head">i am girl</h1>
};
const HeadingComp = ()=>(
    <div id="jd"> 
    <Title/>
     <h1 className="hjgd">namste funcyional component</h1>;
     </div>
);

const heading = React.createElement("h1", { id: "heading" }, "Namsate React tom");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComp/>);

