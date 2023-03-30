//only for reference to create class based components 
import {Component} from "react"
class Profile1 extends Component {
    //React.Component comse from "react"
    //most important part of class based component is render method....clas based cant be created without render method....render will return some jsx
    constructor(props){   //to invoke class we need to constructor and when we use constructor we also use super
        super(props);
        //create state over here 
        // this.state = {                 //react gives to access to create state 
        //     count: 0,   //initial value is 0
        //     count2: 0  ///adding 2nd variable in the state as it a one big object in class components 
        // };
        this.state = {  //creating state to get api data into UI
            userInfo: {  //state is userInfo 
                name: "Dummy Name",  //name is dummy name
                location: "Dummy location"
            }
        }
        console.log("Child - constructor"+ this.props.name) //called third
    }
    async componentDidMount(){  //called after first render 
        //API calling will be done here 
         //best place to make an api call, calling github api

        const data = await fetch("https://api.github.com/users/pankhuribansal") //calling an api using fetch
        const json = await data.json()
        console.log(json)
        this.setState({  //push data into the state 
            userInfo: json,
        })
        console.log("Child - componentdidMount"+ this.props.name)   //will be called after render, callled fifth...adding props as name in componentdidmount
    }

    componentDidUpdate(){  //this will come into picture when the setState will update componentdidmount after rendering it again, ...called after every next render 
        console.log("Component Did Update")
    }
    componentWillUnmount(){
        console.log("Component Will Unmount")
    }

    render(){
        const {count} = this.state
        console.log("Child - Render"+ this.props.name)  //called fourth, adding props in render
        return (
            <div>
                <h1>Profile Class Component</h1>
                <img src= {this.state?.userInfo?.avatar_url} /> 
                <h2>Name: {
                    this.state?.userInfo?.login  //to access the props or state in the class based component we use this.props or this.state
                    }</h2>
                    <h2>Location: {
                    this.state?.userInfo?.location  //to access the props or state in the class based component we use this.props or this.state
                    }</h2>
                
                {/* <h2>Count: { count //writing states in class 
                }</h2> */}
               {/* <h4> <button    //setting state in class components
                onClick={() => this.setState({
                    //send modifiied object.....we never mutate the states directly...will always use setState to change
                    count: 1,
                    count2: 2,
                })}
                >Class State</button></h4> */}
            </div>
            
        )
    }
}

export default Profile1

//sequence of methods 
// Parent Constructor
// Parent render
//  Child - constructorfirst child
//  Child - Renderfirst child
//  Parent componentDidMount  -- called before api call coz react finishes render cycle 1st then go to commit cycle becuase here we have an api which will take time for data to load 
//  {login: 'PankhuriBansal', id: 66808553, node_id: 'MDQ6VXNlcjY2ODA4NTUz', avatar_url: 'https://avatars.githubusercontent.com/u/66808553?v=4', gravatar_id: '', …}
//  Child - componentdidMountfirst child
//  Child - Renderfirst child == called as setState rerenders the component once again as we have data loaded now, this rerender cycle is known as updating


/*making api console logs of child */ 
// Child - constructorfirst child
// Child - Renderfirst child
//  {login: 'PankhuriBansal', id: 66808553, node_id: 'MDQ6VXNlcjY2ODA4NTUz', avatar_url: 'https://avatars.githubusercontent.com/u/66808553?v=4', gravatar_id: '', …}
//  Child - componentdidMountfirst child
// Child - Renderfirst child

/* 
child constructor 
child render
child componentDidMount 


API call
Set State

<UPDATE CYCLE> - first will call render, then upadte the DOM, then will call componentDidUpdate
*/