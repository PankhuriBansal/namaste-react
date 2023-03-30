import { createContext,useContext } from "react";

const UserContext = createContext({
    user:{ 
        name: "Dummy Name",
        email: "dummy@gmail.com"
    },
})

export default UserContext