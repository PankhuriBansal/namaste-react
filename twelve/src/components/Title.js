import { useState, useContext } from "react"
import { Link} from "react-router-dom"
import "../../index.css"
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext"
import {useSelector} from "react-redux"

const loggedInUser = () => {
  //API call to check authentication 
  return false;
}

const Title = () => {
  
    return(
      <a href="/">
      <img 
          className="h-28 p-2"   //for altering the classes in image size, for padding we write p-number, for padding letf - pl-2
          //px padding in x-axis, py padding in y axis
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnFozhTr0xgxy81TpJp1Ne99d50TdH9cJNjA&usqp=CAU" />
          </a>
          )
}
export default Title;

export const Header = () => {   //functional component returns jsx
  const [isLoggedIn, setIsLoggedIn] = useState(false) //states for login logout button
  
  const isOnline = useOnline(); //for online offline status 

  const {user} = useContext(UserContext) //to access information from context will use useContext and get UserContext here 

  const cartItems = useSelector((store) => store.cart.items)  //to get items from store,to subscribe the store to store.cart.items we will use useSelector hook 
  console.log(cartItems )
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-purple-400">    
    {/* to make the header purple in smaller devices i.e when the width changes it becomes purple,sm = small devices, as i cross the small size limit change my css */}
    <Title/>
      <div className = "nav-items">
        <ul className="flex py-10">  
        <li className="px-2"><Link to="/">Home</Link></li>
        <li className="px-2"><Link to="/about">About</Link></li>
        <li className="px-2"><Link to="/contact">Contact</Link></li>
        <li className="px-2"><Link to="/instamart">Instamart</Link></li>
        <li className="px-2"><Link to="/cart">Cart-{cartItems.length} items</Link></li>   
          {/* cartItems.length should be used to return the number of items in the cart */}
          {/* <Link to="/about"><li>About us</li></Link>
          <Link to = "/contact" ><li>Contact</li></Link>
          <Link to="/cart"><li>Cart</li></Link>
          <Link to="/instamart"><li>Instamart</li></Link> */}
        </ul>
      </div> 
      <h3>{isOnline ? ("Yes"): ("No")}</h3>   
      <span className="p-10 font-bold text-white">{user.name}</span>
        {   //using user.name from useContext to display user name from UserContext...will get dummy name here before button
            
          //using ternary operator for login logout button 
          isLoggedIn ?( 
            <button onClick={() => setIsLoggedIn(false)}>Logout</button> )
          :(
            <button onClick= {() => setIsLoggedIn(true)}> Login </button>)
        }
    </div>
  );
};
