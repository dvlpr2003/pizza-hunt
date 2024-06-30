import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./global-var/userSlice"



const store = configureStore(
    {
        reducer:{
            user:userReducer,
            

            
        }
    }
)



export default (store);


