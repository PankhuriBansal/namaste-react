import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"  //useParams are hooks 
import { IMG_CDN_URL } from "../config";
import Shimmer from "../components/Shimmer"
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";  //exported as a named export 
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    //how to read a dynamic URL params 
    const {resId} = useParams();  //to render the id of the restaurant 
    // const [restaurant,setRestaurant ] = useState({})  //to rerender the details of each restaurant, default value = empty object data {} as data is an object 
    // console.log(params)   //it will give the id typed on the browser 
    const restaurant = useRestaurant(resId)  //restaurant will get the menu details using the useRestaruant hook and resId as it is a custom hook 

    //dispatch will come from another hook called useDispatch 
    const dispatch = useDispatch()

    // const handleAddItem = () => {                     //creating function to add item to our store 
    //     //when i click on add button it should dispatch an action
    //     //additem comes from slice  
    //     dispatch(addItem("Grapes"))            //dispatch an action to add an item to the cart , dispatch action pass the payload
    // }              
    
    const addFoodItem = (card) => {      //making the add food item function which will dispatch the additem function using the card 
        dispatch(addItem(card))
    }

    return (!restaurant) ? <Shimmer/> : (  
        <div className="flex ">
        <div>
            <h1>Resturant id: {resId}</h1>
            <h3 className="content-stretch">{restaurant.cards[0]?.card?.card?.info?.name} </h3> 
            <h3>{restaurant.cards[0]?.card?.card?.info?.avgRating} stars</h3> 
            <img src={IMG_CDN_URL + restaurant.cards[0]?.card?.card?.info?.cloudinaryImageId} />
            <h3>{restaurant.cards[0]?.card?.card?.info?.address} </h3> 
            {/* <h3>{restaurant.costForTwo}</h3> */}
            </div>
            {/* <div className= " bg-green-100 m-2 p-2 h-12" onClick={() => handleAddItem()}
                //now we will add our item using button and using function handleAddItem function and create handleitem function 
            >Add Item</div> */}
            <div className="p-5">
           <h1>Menu
            {/* //to list down our menu for the whole restaurant which we have rendered  */}
            <ul>
            {Object.values(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((card,index)=>(
                    //adding button the whole menu 
               <li key = {index}>
                {card.card.info.name} - { " " }
                <button className="p-1 bg-green-100 m-2" onClick={() => addFoodItem(card)   //adding the addFoodItem to the function and we will also pass the item here now
               }>Add item
               </button>              
               </li>
            )
            ) }
            </ul>
            </h1>
            </div>
            </div>
            )
    };

export default RestaurantMenu;