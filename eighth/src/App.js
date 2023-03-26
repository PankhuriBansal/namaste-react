import React from "react"; //react - core react package
import ReactDOM  from "react-dom/client"//reactdom - for manipulating dom
//default import
import Title from "./components/Title";
import About from "../src/components/About"; 
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
//named import
import { Header } from "./components/Title";  //using {} it is not object destructuring
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";  //import for routing using react-router-dom
import Contact from "./components/Contact";

const AppLayout = () => {  //applayout should have header,
  return (
    < >

   <Header />
   {/*     header and footer should always be there and only outlet should change ,so all the children will go into outlet according to route      */}
   <Outlet/>
   <Footer/>
   </>
  )
}

const appRouter = createBrowserRouter([  //creating this to load the component using reateBrowserRouter and array 
  {
    //will first define how shall i use different path for different components 
    path: "/",   
    element: <AppLayout/>,   //will load applayout
    errorElement: <Error/>,   // to load the error element whenever there is an error in the page 
    children : [  //to make children of applayout use "children" and post the path to about below it 
    {
      path: "/",  //route
      element: <Body/>,   //component name
    } ,
    {
        path: "/about",  //configs for various children over here..relative path 
        element: <About/>,
        children: [{  //to make children of about 
          path:"profile",  //no need to add / over here , parentPath/{path}, localhost:1234/about/profile
          element: <Profile/>  //a new component to be created 
        }]
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurant/:resId",  //id here depicts the id of each restaurant by entering id manually initially 
        element: <RestaurantMenu/> 
      }
    ]

  },
  
])

const root  = ReactDOM.createRoot(document.getElementById("root"));  //to modify DOM....second library

root.render(<RouterProvider router={appRouter}/>) //rendering RouterProvider to render the routing pages here..passing appRouter as props 
