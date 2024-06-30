import { configureStore} from "@reduxjs/toolkit";
import userReducer from "./global-var/userSlice";
import cartReducer from "./ui/cartSlice";



const store = configureStore(
    {
        reducer:{
            user:userReducer,
            cart:cartReducer
            

            
        }
    }
)



export default (store);


