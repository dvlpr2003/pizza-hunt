import Home from "./ui/Home"

import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from "./ui/menu";


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
