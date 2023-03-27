import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"  //useParams are hooks 
import { IMG_CDN_URL } from "../config";
import Shimmer from "../components/Shimmer"
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    //how to read a dynamic URL params 
    const {resId} = useParams();  //to render the id of the restaurant 
    // const [restaurant,setRestaurant ] = useState({})  //to rerender the details of each restaurant, default value = empty object data {} as data is an object 
    // console.log(params)   //it will give the id typed on the browser 
    const restaurant = useRestaurant(resId)  //restaurant will get the menu details using the useRestaruant hook and resId as it is a custom hook 

    return (!restaurant) ? <Shimmer/> : (  
        <div className="menu">
        <div>
            <h1>Resturant id: {resId}</h1>
            <h3>{restaurant.cards[0]?.card?.card?.info?.name} </h3> 
            <h3>{restaurant.cards[0]?.card?.card?.info?.avgRating} stars</h3> 
            <img src={IMG_CDN_URL + restaurant.cards[0]?.card?.card?.info?.cloudinaryImageId} />
            <h3>{restaurant.cards[0]?.card?.card?.info?.address} </h3> 
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