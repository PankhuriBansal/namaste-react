//accordion built in this component from material UI 

import { useState } from "react"

//separate section for components 
const Section = ({title,description,isVisible,setIsvisible}) => {    //passing title here to access it below..passing setIsVisible as a prop over here tp show functionality in the section component  
    // const [isVisible, setIsvisible] = useState(false)  //state created for showing and hiding description 
    //took power from section component and gave it to the parent component
    return (
        <div className="border border-black p-2 m-2">
        <h3 className="font-bold text-2xl">{title}</h3>
        {   //conditionsl rendering for hiding the show button when it is already shown
                isVisible ? 
                ( <button 
            onClick={() => setIsvisible(false)}    //show button for description 
            className="cursor-pointer underline p-2 m-2">
                Hide
             </button>)
                
               : ( <button 
             onClick={() => setIsvisible(true)}    //show button for description 
                className="cursor-pointer underline p-2 m-2">
                 Show
                </button>)
            }
            {    //to show the description when the isVisible is true we wrapped it inside a js brackets and write isVisible inside it 
                isVisible && <p>{description} </p>
            } 
        </div>
    )
}

const Instamart = () => {    //created different components ,
    //for controlling all the three sections we have to declare the state object
    // const [sectionConfig, setSectionConfig] = useState({  //creating object for all the 3 states
    //     showAbout : false,
    //     showTeam : false,
    //     showCareer: false,
    // })

    const [visibleSection,setVisibleSection ] = useState("About")  //using this state to show only 1 section 

    return(
        <div className="text-xl p-2 m-2 ">
        <Section title={"About Instamart"}   //passed title as a prop 
            description = {"This is the about section of Instamart. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}  //passing description as a prop
            // isVisible = {sectionConfig.showAbout}  //giving power to instmart variable to control fucntionality 
            //for showing only about
            isVisible = {visibleSection === "About"}  //to see only the visible section 
            setIsvisible ={() => setVisibleSection( "About" ? "" : "About" //passing the property from section to give control to parent instamart to set the state for show and hide function  
               )}
        />
        
        <Section title={"Team Instamart"}   //passed title as a prop 
            description = {"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}  //passing description as a prop
            isVisible = {visibleSection === "Team"}   //giving power to instamart component to control functionality 
            setIsvisible = {() => setVisibleSection("Team"? "" : "Team")}

        />
         <Section title={"Careers"}   //passed title as a prop 
            description = {"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}  //passing description as a prop
            isVisible = {visibleSection === "Careers" }  //giving power to instamart component to control functionality 
            setIsvisible = {() => setVisibleSection("Careers"? "" : "Careers")}

        />
            {/* <About/>
            <DetailsofInstamart/>
            <TeamInstamart/>
            <Product/>
            <Careers/> */}
        </div>
    )
}

export default Instamart