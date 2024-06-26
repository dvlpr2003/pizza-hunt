import Home from "./ui/Home"
import Menu  from "./ui/menu";


import "./App.css"
import { useEffect ,useState} from "react"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./AppLayout/AppLayout";
import getData from "./services/api";
import Cart from "./ui/cart";
import Order from "./ui/order";


function App() {
  const [cart,setCart]=useState(null)
  

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
          element:(<Menu cart={cart} setCart={setCart}/>),
          loader:menuloader,
        },
        {
          path:"cart",
          element:(<Cart cart={cart} setCart={setCart}/>),
        },
        {
          path:"order/new",
          element:(<Order/>), 
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

async function menuloader(){
  const menu = await getData()
  return menu
}

export default App


