import { Outlet } from "react-router-dom";
import {Component} from "react";
import Profile from "./Profile";
import Profile1 from "./ProfileClass";

class About extends Component{
    constructor(props){
        super(props);  //first research why do we use super over here after constuctor
       
       // console.log("Parent Constructor")  //called first
    }
    componentDidMount() {   //2nd research, made componendidmount an async function but cant make useEffect an asyncfunction 
       

        
        //console.log("Parent componentDidMount")  //called sixth 
    }
    render(){
       // console.log("Parent render")  //called second 
        return (
            <div>
                <h1>About Us Page</h1>
                <p> {" "} this is a namaste react page  </p>
                {/* <Outlet...used for getting children from the parent about component 
                    //to get the profile page in the routing of about/profile/> */}
            {/* <Profile name={"Akshay Functional"}  
                    //passing props , getting from profile.js , in functional component  
                /> */}
            <Profile1 name={"first child"}  //passing props in classs based component 
                />
                {/* <Profile1 name={"second child"}  //passing props in classs based component 
                /> */}
            </div>
        )
    }
}

export default About;

// Parent Constructor
// About.js:15 Parent render
// ProfileClass.js:13 Child - constructorfirst child
// ProfileClass.js:21 Child - Renderfirst child
// ProfileClass.js:13 Child - constructorsecond child
// ProfileClass.js:21 Child - Rendersecond child
//after thi DOM Iis updated for children, so commit phase starts 
// ProfileClass.js:17 Child - componentdidMountfirst child
// ProfileClass.js:17 Child - componentdidMountsecond child
// About.js:12 Parent componentDidMount