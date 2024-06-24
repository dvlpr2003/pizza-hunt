import Home from "./ui/Home"
import Menu  from "./ui/menu";


import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./AppLayout/AppLayout";
import getData from "./services/api";


function App() {

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
          element:(<Menu/>),
          loader:menuloader,
        }
      ]
    },
    

  ])

  return (
    <>
     <RouterProvider router={router} />
     {/* <App1/> */}
     
    </>
  )
}

async function menuloader(){
  const menu = await getData()
  return menu
}

export default App


