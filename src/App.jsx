import Home from "./ui/Home"
import Menu from "./ui/menu";


import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./AppLayout/AppLayout";


function App() {

  const router = createBrowserRouter([
    {
      element:(<AppLayout/>),
      children:[
        {
          path:"/",
          element:(<Home/>)
        },
        {
          path:"menu",
          element:(<Menu/>)
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


export default App


