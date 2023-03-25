import { useState, useEffect } from "react";
import { restaurantList } from "../config"; //used .. 
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom'
 
function filterData(searchText,restaurants) {   //filterData function to filter the restaurantList using the input which we give 
  const filterData =  restaurants
  .filter((restaurant) =>
    restaurant.data.name?.toLowerCase()?.includes(searchText))   //toLowerCase for converting all names to lower case 
  return filterData;
}  

const Body = () => {
    
    const [allRestaurants, setAllRestaurants] = useState([])  //need two set states , one for all restaurants and other for filtered restaurants 
    const [searchText, setSearchText] = useState("");  //using empty array for initial vacant object 
    const [filteredRestaurants,setFilteredRestaurants] = useState([])  //creating useState variable to update the restaurant list using default value as restaurantList
    // console.log(restaurants)  //will rerender on click or search input 
    useEffect(() => {   //useEffect is a hook which is called using callback function and other is dependency array 
        getRestaurant()  //calling api call function 
    }, []);    
    async function getRestaurant() {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.2066811&lng=78.006695&page_type=DESKTOP_WEB_LISTING") //calling the API
      const json = await data.json()  //the returned data to be converted into json object to make readable 
      console.log(json) 
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)  //getting data from the api which we have called using optional chaining, getting all restaurants 
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards) //getting filtered restaurants data 
    }
    

    //conditional rendering
    //if restaurant is empty => shimmer ui
    //if rest has data => actual data ui 
    if (!allRestaurants) return null ; //early return...no restaurants don't render anything 
    // if(filteredRestaurants?.length === 0) return ( <h1>No restaurant found</h1>)
    return allRestaurants?.length === 0 ?  //when no restuarants are there in filtered data show a shimmer UI
      (<Shimmer/>) : 
    (
       <>
       <div className="search-container">
        <input type="text" 
        className="search-input"
        placeholder="Search Here" 
        value={searchText}
        onChange = {(e) => {
            setSearchText(e.target.value) //we cannot modify this directly..for modification we need to use a function given by useState which is "set.."
         }}
        />
        <button className="search-btn" 
        onClick={() => {
          //need to filter data
          const data = filterData(searchText,allRestaurants);  //give the searchText as we need to search using it as an input from the restaurants as 2nd param
          //update the state - restaurants variable 
            setFilteredRestaurants(data);  //making dataset as the restaurants and changing the initial value to the first searched value and UI will be in sync with the states
           
        }}
          
        >
            Search 
        </button>
        
        </div>
      <div className="restaurant-list">
      {/*write logic for no restaurants found */}
      {
        filteredRestaurants.map((restaurant) => { //using map to render the restuarants without typing again and again 
          return(
          <Link to={"/restaurant/" + restaurant.data.id}  //to link the restaurant via id 
          key={restaurant.data.id} //giving key as restaurant id 
          ><RestaurantCard {...restaurant.data} key = {restaurant.data.id}/></Link> 
             );
        })
      }
      </div>
      </> 
    )
  }

export default Body;