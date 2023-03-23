import React from "react"; //react - core react package
import ReactDOM  from "react-dom/client"//reactdom - for manipulating dom
//default import
import Title from "./components/Title";
//named import
import { Header } from "./components/Title";  //using {} it is not object destructuring
import Body from "./components/Body";
import Footer from "./components/Footer";
//props-- properties == "restaurant = {restaurantList[0]}" here props is this - way of passing data in the component
//pass props or pass data means passing properties into my functional or class component 
//here restaurant is a prop and {restaurantList[] is data inside the component }

/*IMPORTANT NOTE - properties which i passed in the RestaurantCard as props are rendered in the Body when we passed the props as restaurant using restaurantList */

//React.fragment 
//jsx can only have parent 
//for 2 parent we have div or we can use react.fragment 
const AppLayout = () => {  //applayout should have header,
  return (
    // header== logo,list items,cart
    // body == search bar and restaurant list(restaurant card - image name,rating,cuisines)
    // footer = links,copyright
    < >
   <Header />
   <Body/>
   <Footer/>
   </>
  )
}
const root  = ReactDOM.createRoot(document.getElementById("root"));  //to modify DOM....second library
//passing react element inside root ...will take element and modify the DOM

//async defer
// root.render(heading2) // to render the react element we use normal name 
root.render(<AppLayout />) //to render the functional component we use angular brackets  
