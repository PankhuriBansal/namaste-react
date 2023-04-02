import { useState,useEffect } from "react"
import {FETCH_MENU_URL} from "../config"

const useRestaurant = (resId) => {   //passing resId from the restaurantmenu component to use it in the api call
    //if my params changes the data also changes 
    const [restaurant, setRestaurant] = useState(null)   //state created to change state for data loading in this hook with null as initial value
    //calling api here using useEffect hook 
    useEffect(() => {   //using useEffect to call an API for restaurant information
        getRestaurantInfo()
    },[]);
 
    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL  +resId );  //getting details of resta. from api calling and using resId from the resmenu component 
        const json = await data.json();
        console.log(json)
        setRestaurant(json.data)  //to update the state whenever we get data from the api 
        console.log(json.data)
    }
    //return restaurant data 
    return restaurant;  //return the state variable as it has now been updated with the restaurant details 
}
export default useRestaurant

/*
declaring a custom hook function and passing my resId, then used useEffect to for calling the info function,
 then we called the api and setRestaurant by updating the state and return restaurant 
*/