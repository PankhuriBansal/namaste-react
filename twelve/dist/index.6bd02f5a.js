//creating h1 tag
const heading = React.createElement("h1", {
    id: "title"
}, "Heading 1");
//h2 tag by react 
const heading2 = React.createElement("h1", {
    id: "title"
}, "Heading 2");
//h1 and h2 both in the
const container = React.createElement("div", {
    id: "container",
    hello: "world" //just a props or a property 
}, [
    heading,
    heading2
] //array of both headings in the div  .. 3rd argument = children
);
const root = ReactDOM.createRoot(document.getElementById("root")); //to modify DOM....second library
//passing react element inside root ...will take element and modify the DOM
root.render(container) //to get heading in the root  .... later used container in the code 
;

//# sourceMappingURL=index.6bd02f5a.js.map
