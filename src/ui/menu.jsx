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
        
        <main   className = "flex flex-column center scroll width-100 pad-t-b">

            <div className="flex flex-column center width-100 gap  ">

            {
            Menudata.map((e)=><Items key={e.id} name={e.name} price ={e.unitPrice} imageurl ={e.imageUrl} soldOut={e.soldOut} ingredients={e.ingredients}/>)
            }

            </div>
      
        </main>
    )
}
const Items =({name,price,imageurl,soldOut,ingredients})=>{

    return(
       
        
        <div className="flex  pizza-item">
            <img src={imageurl} alt="" onClick={()=>alert("hi")} className="pizza-img"/>
            <div className="flex flex-column justify-content-center width-100">
                <span>{name}</span>
                <div className="flex ingredients felx-wrap ">
                {
                ingredients.map((e)=><span>{e}</span>)
                }
                </div>
                <div className="flex item-center flex-wrap">
                    <span>€{price}.00</span>
                    <div className="flex item-center gap price-options margin-left-auto ">
                        <div className="flex item-center gap-1rem ">
                            <button className="inc-dec-btn">-</button>
                            <span>1</span>
                            <button className="inc-dec-btn">+</button>
                        </div>
                        <button className="Btn-cart">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        
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
