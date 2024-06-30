import {  useState } from "react"
import { useDispatch } from "react-redux"
import { updateName } from "../global-var/userSlice"
import { useNavigate } from "react-router-dom"



const Home = ()=>{
    
   



    return(
        <>
            <HomeContent />
        </>
    )

}



const HomeContent = ()=>{
    const nav=useNavigate()
    const [name,setName]=useState()
    const dispatch=useDispatch()
    function handleEvent(e){
        e.preventDefault();
        dispatch(updateName(name))
        if (!name) return;
        nav("/menu")

        
    
    
    
    }
    return(
        <homecontent className="flex flex-column center gap">
            <span className="home-cont-txt">The best pizza.</span>
            <span className="blue-txt-600 home-cont-txt">Straight out of the oven, straight to you.</span>
            <p className="p-cont-txt" onClick={()=>dispatch({type:"inc"})}>👋 Welcome! Please start by telling us your name:</p>
            <form className="flex flex-column gap-1rem"> 
                <input type="text" className="input-border pad-t-b pad-r-l transitions radius name-input" placeholder="Your full name" onChange={(e)=>setName(e.target.value)}/>
                <button onClick={(e)=>handleEvent(e)}>continue</button>
            </form>

        </homecontent>
    )
}
export default Home;