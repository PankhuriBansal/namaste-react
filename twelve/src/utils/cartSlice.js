import { createSlice } from "@reduxjs/toolkit";

const cartSlice  = createSlice({
    name: 'cart',           //name of slice
    initialState: {         //initial value of cart 
        items: []
        // items: ["Banana","Apples"],    //taking apple banana as example     //put empty items , cart is an object which has an items empty
    },
    reducers:  {             //modify cart slice by creating reducers which are called on dispatch of an action, what action will call what reducer function
       addItem: (state, action) => {       //mapping between action and reducer function, action when the reducer function is called, reducer function takes in 2 things one state and other action
        state.items.push(action.payload);                                  //state - initial state(prev state,empty), action-- data which is coming in                              //now to push the action into the items we need to push the elements in the store and then action.payload will receive the data in the cart on button click                                   //current state will be the changed state after pushing of the items  
       },          //one more action which is clear cart 
       clearCart: (state) => {          //take a state and modify it 
            state.items = [];            //to clear the state we dont need action.payload as we are not getting any data while clearing the cart 
       },            //one more action remove item
       removeItem: (state,action) => {
        state.items.pop()
    }

    }                 
})

//both export offered by reduxtoolkit library 
export const {addItem,clearCart,removeItem} = cartSlice.actions      //will export all the actions using createSlice.actions

export default cartSlice.reducer   //it will combine all the reducers in 1 and export it, it is a reducer not reducers 


// 