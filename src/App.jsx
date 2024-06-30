import Home from "./ui/Home"
import Menu ,{menuloader}from "./ui/menu";


import "./App.css"
import { useState} from "react"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./AppLayout/AppLayout";
import Cart from "./ui/cart";
import Order from "./ui/order";
// function reducer(state,action){
//   if (action.type === "del"){
//     let filteredItems = state.filter((i)=>i.id !== action.id)
//     return filteredItems;
//   }
//   if (action.type === "add"){
//     return ([action.item]);
//   }
// }

function App() {
 
  
  const[priority,setPriority] =useState(false)



  const router = createBrowserRouter([
    {
      element:(<AppLayout/>),
      children:[
        {
          path:"/",
          element:(<Home/>),
        },
        {
          path:"menu",
          element:(<Menu />),
          loader:menuloader,
        },
        {
          path:"cart",
          element:(<Cart />),
        },
        {
          path:"order/new",
          element:(<Order  priority={priority} setPriority={setPriority}/>), 
        }
      ]
    },
    

  ])

  return (
    <>
    
     <RouterProvider router={router} />
    </>
  )
}




export default App


