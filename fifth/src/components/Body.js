import { useState } from "react";
import { restaurantList } from "../config"; //used .. 
import RestaurantCard from "./RestaurantCard";
 
function filterData(searchText,restaurants) {   //filterData function to filter the restaurantList using the input which we give 
  const filterData =  restaurants
  .filter((restaurant) =>
    restaurant.data.name.includes(searchText))
  //using filter, includes and other js methods to search it from the given text 
  return filterData;
}  

const Body = () => {
    // let searchTxt = "KFC" //using it initially in value it wont be able to edit the search bar becuase local variable don't work in react in this way
    //so to make it work in react we need to use it in the form of state variable which is a react variable 
    //searchText is a local state variable
    const [searchText, setSearchText] = useState("");//default value is "KFC" over here given in the useState //to use variable in react we use usestate hooks to create state variable 
    //useState function returns an array whose first element would be searchText i.e is our variable name and second item as the function to update the variable
    // const searchClicked = false;  //in constant form to update the search button

    // const [ searchClicked,setSearchClicked] = useState("false") 
    const [restaurants,setRestaurants] = useState(restaurantList)  //creating useState variable to update the restaurant list using default value as restaurantList
    return (
       <>
       <div className="search-container">
        <input type="text" 
        className="search-input"
        placeholder="Search Here" 
        value={searchText}
        // onChange = {(e)=>console.log(e.target.value)}  //this console will the further words which we type along with kfc before them but wont be displayed in the search bar because we have hard coded the value kfc 
        onChange = {(e) => { //from e i can read whatever i am typing
            // e.target.value == whatever we write in input 
            setSearchText(e.target.value) //we cannot modify this directly..for modification we need to use a function given by useState which is "set.."
         }}
        //using onchangeinput funciton to edit the search bar...it will take the function which is a callback function which has an e event 
        //whenever the input changes this funcion is called 
        />
        <button className="search-btn" 
        //we need to filter te rest data when we click the search button 
        onClick={() => {
          //need to filter data
          const data = filterData(searchText,restaurants);  //give the searchText as we need to search using it as an input from the restaurants as 2nd param
          //update the state - restaurants variable 
          if (data === null){
            setRestaurants(data);
          }
           
          //to filter the data i need to pass the filterData in the restaurants to change the list onClicking the button
        }}
          // onClick={() => {   //to change the value from false to true we will use onClick function and setSearchclicked to true
          //   if(searchClicked === "true"){
          //     setSearchClicked("false")  //to set false when initially it is true 
          //   }else{ setSearchClicked("true")}  //set it to true when it is false 
          //  }} 
        >
            Search 
        </button>
        </div>
      <div className="restaurant-list">
      {
        restaurants.map((restaurant) => { //using map to render the restuarants without typing again and again 
          return <RestaurantCard {...restaurant.data} key = {restaurant.data.id}
             //using spread operator to spread my objects 
             //we also need to give key for virtual DOM and reconciliation 
             //index is also a valid key but we should never use index as a key but when we dont have anything unique then we can use index as a key 
          />
        })
      }
      </div>
      </> 
    )
  }

export default Body;