import { useReducer } from "react"

function reducer(state,action){
    if (action.type === 'inc') return state + 1
}
const Home = ()=>{

    const [count,dispatch]=useReducer(reducer,0)
    console.log(`count :${count}`)
    return(
        <>
            <HomeContent dispatch={dispatch}/>
        </>
    )

}


const HomeContent = ({dispatch})=>{
    return(
        <homecontent className="flex flex-column center gap">
            <span className="home-cont-txt">The best pizza.</span>
            <span className="blue-txt-600 home-cont-txt">Straight out of the oven, straight to you.</span>
            <p className="p-cont-txt" onClick={()=>dispatch({type:"inc"})}>👋 Welcome! Please start by telling us your name:</p>
            <form> 
                <input type="text" className="input-border pad-t-b pad-r-l transitions radius name-input" placeholder="Your full name"/>
            </form>

        </homecontent>
    )
}
export default Home;