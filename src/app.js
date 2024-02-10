import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import AboutUs from './components/AboutUs';
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
import ResMenu from './components/ResMenu'

const Grocery = lazy(()=>import("./components/Grocery"));

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
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>loading..................</h1>}><Grocery/></Suspense>
      },
      {
        path:"/res/:resId",
        element:<ResMenu/>
      }
    ],
    errorElement:<ErrorPage/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
