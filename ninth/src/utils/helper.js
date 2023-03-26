//for maing code redable, reusable, maintainable and testable 

export function filterData(searchText,restaurants) {   //filterData function to filter the restaurantList using the input which we give 
    const filterData =  restaurants
    .filter((restaurant) =>
      restaurant.data.cuisines.join('')?.toLowerCase()?.includes(searchText.toLowerCase()))   //toLowerCase for converting all names to lower case 
    return filterData;
  }  