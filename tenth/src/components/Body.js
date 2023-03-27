import { useState, useEffect } from "react";
import { restaurantList } from "../config"; //used .. 
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom'
import { filterData } from "../utils/helper";  //import the helper methods (filterdata)
import useOnline  from "../utils/useOnline"

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
      
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)  //getting data from the api which we have called using optional chaining, getting all restaurants 
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards) //getting filtered restaurants data 
    }
    //making online offline checking hooks 
    // const isOnline = useOnline();   //using hook useOnline to check wether we are online or not created in utils, use isOnline 
    // if (!isOnline){
    //   return <h1> Please check your internet connection</h1>
    // } 
    //conditional rendering
    //if restaurant is empty => shimmer ui
    //if rest has data => actual data ui 
    if (!allRestaurants) return null ; //early return...no restaurants don't render anything 
    // if(filteredRestaurants?.length === 0) return ( <h1>No restaurant found</h1>)

    const searchBtnCSS = {
      backgroundColor : "red"
    }
    return allRestaurants?.length === 0 ?  //when no restuarants are there in filtered data show a shimmer UI
      (<Shimmer/>) : 
    (
       <>
       <div className="search-container p-5 bg-pink-100 my-5">
        <input type="text" 
        className="focus:bg-green-100"
        placeholder="Search Here" 
        value={searchText}
        onChange = {(e) => {
            setSearchText(e.target.value) //we cannot modify this directly..for modification we need to use a function given by useState which is "set.."
         }}
        />
        <button className="p-2 m-2 bg-purple-500 text-white rounded-xl hover:bg-black "
        // style={searchBtnCSS}   //style for inlone css which takes in js object inside this 
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
      <div className="flex flex-wrap">
      {/*write logic for no restaurants found */}
      {
        filteredRestaurants.map((restaurant) => { //using map to render the restuarants without typing again and again 
          return(
          <Link to={"/restaurant/" + restaurant.data.id}  //to link the restaurant via id 
          key={restaurant.data.id} //giving key as restaurant id 
          >  
          <RestaurantCard {...restaurant.data}/></Link> 
             );
        })
      }
      </div>
      </> 
    )
  }

export default Body;