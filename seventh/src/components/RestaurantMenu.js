import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"  //useParams are hooks 
import { IMG_CDN_URL } from "../config";
import Shimmer from "../components/Shimmer"

const RestaurantMenu = () => {
    //how to read a dynamic URL params 
    const {resId} = useParams();
    const [restaurantId,setRestaurantId ] = useState(null)  //to rerender, default value = empty object data {} as data is an object 
    
    // console.log(params)   //it will give the id typed on the browser 

    useEffect(() => {   //using useEffect to call an API for restaurant information
        getRestaurantInfo()
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +resId);  //api not loading properly 
        const json = await data.json();
        console.log(json)
        setRestaurantId(json.data)  //to rerender the whole api using api 
    }

    return (!restaurantId) ? <Shimmer/> : (  
        <div className="menu">
        <div>
            <h1>Resturant id: {restaurantId}</h1>
            {/* <h2>{restaurantId.name}</h2>
            <img src={IMG_CDN_URL + restaurantId.cloudinaryImageId} />
            <h3>{restaurantId.area}</h3>
            <h3>{restaurantId.city}</h3>
            <h3>{restaurantId.avgRating} stars</h3>
            <h3>{restaurantId.costForTwo}</h3>
            </div>
            <div>
           <h1>Menu</h1>
           <ul>
            {Object.values(restaurantId?.menu?.items).map((item)=>{   //to list down our menu for the whole restaurant which we have rendered 
                <li key={item.id}>{item.name}</li>
            })}
           </ul>
            </div> */}
            </div>
            </div>
            )
    };

export default RestaurantMenu;