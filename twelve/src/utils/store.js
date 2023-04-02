const { configureStore } = require("@reduxjs/toolkit");
import cartSlice from "./cartSlice";         //import all the reducers here as we have default export of reducer only 

const store = configureStore({   //creating store which will contain slices 
     reducer: {                      //putting slice in this store , use reducer (single reducer)
        cart: cartSlice               //name of slice and slice 
     },                           
});


export default store; 


//whole thing from beginning
/* 
1. created store    
    configureStore() - RTK
2. Provided my store to app
    using provider component from react-redux  
        <Provider store = {store}/>  //store as prop  
3. created slice 
    -from RTK - createSlice({
        name: "",
        initialState: ""
        reducers: {          //object of action and reducer function correspoding to that action
            addItem(state,action) => { state = action.payload}
        }
    }) 
4. export the created slice 
    export const {addItem, removeItem} = cartSlice.actions
    export default cartSlice.reducer

5. Put that slice into store 
    {
        reducer: {         //import all the reducer 
            cart: cartSlice,
            user: userSlice
        }
    }    
*/ 