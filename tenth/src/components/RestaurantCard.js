import { IMG_CDN_URL } from "../config";
//optional chaining == using "?" below 
const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
    avgRating,address}) => { //functional component which retunrs some jsx ...{restaurant}--destructuring 
    //to make the code clean we can use this and make data inside our restaurant 

    return(
      <div className="w-56 h-min p-3 m-3 shadow-lg bg-pink-100">
        <img src={    //for exactly 200px we need to use the sqaure bracket notations 
         IMG_CDN_URL
          +cloudinaryImageId}  //cloudinary image id will be added in the end 
        />
          <h2 className="font-bold text-xl">{name}</h2> 
          <h3>{cuisines.join(",")}</h3>
          <h3>{avgRating}</h3>
          <h4>{lastMileTravelString} minutes</h4>
          <h3>{address}</h3>
          
      </div>
    )
  }

  export default RestaurantCard;