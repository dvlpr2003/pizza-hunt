import Home from "./ui/Home"
import Menu from "./ui/menu";

import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
   
    {
      path:"/",
      element:(<Home/>)
    },
    {
      path:"menu",
      element:(<Menu/>)
    }

  ])

  return (
    <>
     <RouterProvider router={router} />
     
    </>
  )
}


export default App
