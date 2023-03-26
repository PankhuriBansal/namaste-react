import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"  //useParams are hooks 
import { IMG_CDN_URL } from "../config";
import Shimmer from "../components/Shimmer"

const RestaurantMenu = () => {
    //how to read a dynamic URL params 
    const {resId} = useParams();  //to render the id of the restaurant 
    const [restaurant,setRestaurant ] = useState({})  //to rerender the details of each restaurant, default value = empty object data {} as data is an object 
    
    // console.log(params)   //it will give the id typed on the browser 

    useEffect(() => {   //using useEffect to call an API for restaurant information
        getRestaurantInfo()
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=26.800083&lng=75.813684&restaurantId=" +resId );  //api not loading properly 
        const json = await data.json();
        setRestaurant(json.data)  //to rerender the whole api using api
        console.log(json.data)
    }

    return (!restaurant) ? <Shimmer/> : (  
        <div className="menu">
        <div>
            <h1>Resturant id: {resId}</h1>
            <h3>{restaurant.cards?.card?.card?.info?.name} </h3> 
            <h3>{restaurant.cards?.card?.card?.info?.avgRating} stars</h3> 
            <img src={IMG_CDN_URL + restaurant.cards?.card?.card?.info?.cloudinaryImageId} />
            
             <h3>{restaurant.area}</h3> 
            
            
            <h3>{restaurant.costForTwo}</h3>
            </div>
            <div>
           <h1>Menu</h1>
           <ul>
            {/* {Object.values(restaurant?.menu?.items).map((item)=>{   //to list down our menu for the whole restaurant which we have rendered 
                <li key={item.id}>{item.name}</li>
            })} */}
           </ul>
            </div>
            </div>
            )
    };

export default RestaurantMenu;