import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext)   //using user to get data from UserContext 

    return (
      <h4 className="p-10 m-10 align-bottom ">{user.name}</h4>
      
    )
}
export default Footer;
    