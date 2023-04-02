import { useDispatch, useSelector } from "react-redux"
import FoodItem from "./FoodItem" 
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    //here cartitems is only subscribed to the array items not to the whole store 
    const cartItems = useSelector((store) => store.cart.items);          //to add items to the cart to subscribe the store, this is the place where we will tell what is the component to subscribe to  

    const dispatch = useDispatch()
    const handleClearCart = () => {         //function to remove everything from the cart 
        dispatch(clearCart())
    }

    //if i write (store => store )  //subscrbing to the store only
    //if i write (store => store.cart)  //subscribe to the cart only
    //if i write (store => store.cart.items)  //subscribe to the cart items only

    //MISTAKE DONE here - subscribing the whole store 
    //eg -- const store = useSelector((store) => store)   ...this will change the whole store everytime i am updating the cart 
    //so we need to subcribe to the specific portion of the store 
    
    return (
        <div>
            <h1 className="font-bold text-3xl ">Cart Items - {cartItems.length}</h1>
            <button 
                className="bg-green-100 m-2 p-2 flex    " 
                onClick={()=> handleClearCart()}>
                Clear Cart 
                </button>
            <div className="flex" >
           {cartItems.map((card,index) => (
            <FoodItem key={index} {...card.card.info}    
            />
           ))}
           </div>
            {/* cant use card or soemthing so will pass the ...cartItems over here */}
        </div>
    )
}

export default Cart