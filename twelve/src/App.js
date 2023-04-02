import React, {lazy,Suspense, useEffect, useState} from "react"; //react - core react package
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
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//chunking, code splitting, dynamic building, lazy loading, ondemand loading, dynamic import == all are same concepts 
//importing instamart by lazy importing 
const Instamart = lazy(() => import("./components/Instamart"))  //doing lazy loading(chunking) on instamart using lazy word from react library, this lazy takes a function and then we will do dynamic import by writing the path over there
//upon on-demand loading --> upon render --> suspend loading
//dont try to do dynamic loading inside our another component 

const AppLayout = () => {  //applayout should have header,

  const [user,setUser] = useState({   //passsing state data from applayout to restaurant card component 
    name: "Namaste",      
    email: "support@gmail.com"
  })

  useEffect(()=>{
    //authenticate user and gives data , 
  })

  return (
    //using provider to provide store to app.js by passing store as props, passing store which is prop name which redux will be using while destructuring the store 
    <Provider store = {store}>   
    {/* //using usercontext.provider in react js and will pass the properties of the original user  */}
    <UserContext.Provider
        value={{   //overwriting the default value to be data to be dynamic as above data will modify according to above useEffect using api call
            user: user,
            setUser: setUser  //using setUser here to modify setUser and use it in the body.js for useContext 
        }}  
      >
    <Header />
    {/*     header and footer should always be there and only outlet should change ,so all the children will go into outlet according to route      */}
    <Outlet/>
    <Footer/>
    </UserContext.Provider>
      </Provider>
  );
};

const appRouter = createBrowserRouter([  //creating this to load the component using reateBrowserRouter and array 
  {
    //will first define how shall i use different path for different components 
    path: "/",   
    element: <AppLayout/>,   //will load applayout
    errorElement: <Error/>,   // to load the error element whenever there is an error in the page 
    children : [  //to make children of applayout use "children" and post the path to about below it 
    {
      path: "/",  //route
      element: <Body  user = {{  //component name 
        name: "Namaste",      //passsing state data from applayout to restaurant card component 
        email: "support@gmail.com"
      }}/>,   
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
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/instamart",
        element :(     //wrapping instamart inside suspense here to load it without initial error as react takes care of these component in a different fashion
        <Suspense fallback= {<Shimmer/>}
          /// to show shimmer until the instamart to be shown here we used fallback function 
        >  
        <Instamart/>
        </Suspense>
        ),
      },
    ]
  },
])
const root  = ReactDOM.createRoot(document.getElementById("root"));  //to modify DOM....second library
root.render(<RouterProvider router={appRouter}/>) //rendering RouterProvider to render the routing pages here..passing appRouter as props 


/*  CHAINING OF DATA FROM PARENT TO CHILD and PARENT TO CHILD and PARENT TO CHILD is called PROP DRILLING
Applayout     
  (state = user)  --applayout is having user as state 
    <Body user = {user} />   --- this state is passed in body component 
      RestaurantCard user={user}   ---- then this body component has a restaurantcard , so we passed user as a prop in it
        <h4>{user}</h4>   -- then we passed user in the restaurant card component 

*/ 
