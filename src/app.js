import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import AboutUs from './components/AboutUs'
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";




const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};
const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<AboutUs/>
      },
      {
        path:"/contact",
        element:<ContactUs/>
      }
    ],
    errorElement:<ErrorPage/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
