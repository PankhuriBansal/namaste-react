//Shimmer are actually dummy resturant cards...so need to create restaurant list with dummy cards

const Shimmer = () => {
    return (
       <div className="restaurant-list"> 
       {
        Array(10) //make array of 10 elements to make 10 shimmer cards
            .fill("") //fill it with an empty array
            .map((e,index) => (  //then create an event for matching the cards
             <div key={index} className="shimmer-card"> </div>  //put the shimmer cards inside this function ..it can complaint coz of a key which we need to use 
            ))
       }
       </div>
    )
}

export default Shimmer