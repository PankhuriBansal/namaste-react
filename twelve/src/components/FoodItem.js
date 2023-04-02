import { IMG_CDN_URL } from "../config";

const FoodItem = ({
    name,
    description,
    price,
    imageId,
    }) => { //functional component which retunrs some jsx ...{restaurant}--destructuring 
    //to make the code clean we can use this and make data inside our restaurant 

    return(
      <div className="w-56 h-min p-3 m-3 shadow-lg bg-pink-100">
          <h2 className="font-bold text-xl">{name}</h2> 
          <img src={    //for exactly 200px we need to use the sqaure bracket notations 
         IMG_CDN_URL+imageId}  //cloudinary image id will be added in the end 
        />
        <h3>{description}</h3>
        <h4> Price: {price/100}</h4>
       
      </div>
    )
  }

  export default FoodItem;