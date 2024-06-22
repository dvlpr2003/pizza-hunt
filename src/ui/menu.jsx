import Header from "../component/header"
import "../App.css"
import { useEffect ,useState} from "react"
import getData from "../services/api"

const Menu = ()=>{
    const [Menudata,setMenudata]=useState(null)
    console.log(Menudata)
    useEffect( ()=>{
        async function callBack(){
            setMenudata(await getData())
        }
        callBack()

    },[])
    console.log(Menudata)
    return(
        <>
        <Header/>
        {
            Menudata&&<MenuItems Menudata={Menudata}/>
        }
        <CartNav/>
        </>
    )
}
const MenuItems = ({Menudata})=>{
 
    return(
        
        <main   className = "flex flex-column center scroll main-padding">

            <div className="flex flex-column center width-100 border">
            {
            Menudata.map((e)=><Items key={e.id} name={e.name} price ={e.unitPrice} imageurl ={e.imageUrl} soldOut={e.soldOut} ingredients={e.ingredients}/>)
            }

            </div>
      
        </main>
    )
}
const Items =({name,price,imageurl,soldOut,ingredients})=>{

    return(
        <li className="flex  pizza-item  width-100 border">
            <img src={imageurl} alt="" onClick={()=>alert("hi")} className="pizza-img"/>
            <div className="flex flex-column justify-content-center">
                <span>{name}</span>
                <div className="flex ingredients ">
                {
                ingredients.map((e)=><span>{e}</span>)
                }
                </div>
                <div className="flex item-center ">
                    <span>€{price}.00</span>
                    <div className="flex item-center gap">
                        <div className="flex item-center gap-1rem">
                            <button className="inc-dec-btn">-</button>
                            <span>1</span>
                            <button className="inc-dec-btn">+</button>
                        </div>
                        <button className="Btn-cart">Delete</button>
                    </div>
                </div>
            </div>
        </li>
    )
}
export const CartNav = ()=>{
    return (
        <div className="cart-nav">
            <p>hello</p>
        </div>
    )
}
export default Menu;
