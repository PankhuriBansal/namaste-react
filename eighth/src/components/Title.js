import { useState } from "react"
import { Link} from "react-router-dom"
import "../index.css"

const loggedInUser = () => {
  //API call to check authentication 
  return false;
}

const Title = () => {
  
    return(
      <a href="/">
      <img 
          className="logo"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnFozhTr0xgxy81TpJp1Ne99d50TdH9cJNjA&usqp=CAU" />
          </a>
          )
}
export default Title;

export const Header = () => {   //functional component returns jsx
  const [isLoggedIn, setIsLoggedIn] = useState(false) //states for login logout button 

  return (
    
    <div className="header">   
    <Title/>
      <div className="nav-items">
        <ul>
        <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About us</li></Link>
          <Link to = "/contact" ><li>Contact</li></Link>
          <li>Cart</li>
        </ul>
      </div>        
        {
          //using ternary operator for login logout button 
          isLoggedIn ?( 
            <button onClick={() => setIsLoggedIn(false)}>Logout</button> )
          :(
            <button onClick= {() => setIsLoggedIn(true)}> Login </button>)
        }
    </div>
  );
};
