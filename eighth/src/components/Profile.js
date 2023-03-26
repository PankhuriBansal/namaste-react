import {useState,useEffect} from 'react'

const Profile = (props) => {

    const [count,setCount] = useState(0)
    // const [count1,setCount1] = useState(0)  //using 2nd state for declaring variable
    useEffect (() => {
        //API CALL
       const timer =  setInterval(() => {    //function to call namste react many times 
            console.log("Namaste React")
        },1000)
        console.log("useEffect")  //will be called afer first render
        return () => {    //it is called to clean up the data in the console and to prevent reentering data 
            clearInterval(timer)
            console.log("useEffect return")  //will be called like componentwillunmount after we leave put page
        };
    },[])  //used count as dep array, when the count changes the useEffect function is called 
    // console.log("render") //will be called first 
    return (
        <div>
        <h1>Welcome to my page</h1>
        <h2>
            Name: {props.name}  
        </h2>
        <h3>Count: {count}</h3>
        <button   //setting state to 1 in count in functional component 
        onClick={() => {
            setCount(1);   //first count change
        // setCount1(2) ///2nd count change
        }
        
        }
        >Count</button>
        </div>
    )
}

export default Profile;