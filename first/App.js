const heading = React.createElement("h1",{},"Namaste Everyone") //create h1 tag using react ...first library4
    const container = React.createElement("div",{
        id: "container"
    },
    [heading1,heading2])
    const root  = ReactDOM.createRoot(document.getElementById("root"));  //to modify DOM....second library
    //passing react element inside root ...will take element and modify the DOM
    root.render(container) //to get heading in the root  .... later used container in the code 