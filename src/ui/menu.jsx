import Header from "../component/header"
import "../App.css"
import { useEffect ,useState} from "react"
import getData from "../services/api"

const Menu = ()=>{
    const [Menudata,setMenudata]=useState(null)
    const [cart,setCart]=useState(null)
    console.log(cart)
    // console.log(Menudata)
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
            Menudata&&<MenuItems Menudata={Menudata} setCart={setCart} cart={cart}/>
        }
        <CartNav/>
        </>
    )
}
const MenuItems = ({Menudata,setCart,cart})=>{
 
    return(
        
        <main   className = "flex flex-column center scroll width-100 pad-t-b">

            <div className="flex flex-column center width-100 gap  ">

            {
            Menudata.map((e)=><Items id={e.id} name={e.name} price ={e.unitPrice} imageurl ={e.imageUrl} soldOut={e.soldOut} ingredients={e.ingredients} setCart={setCart} cart={cart}/>)
            }

            </div>
      
        </main>
    )
}
const Items =({name,price,imageurl,soldOut,ingredients,id,setCart,cart})=>{
    
    const click=()=> {
        let cartItems = {
            id:id,
            name:name,
            price:price,
            ingredients:ingredients
        }
        if (cart) return setCart(()=>[...cart,cartItems])
        setCart([cartItems])
        
    }

    return(
       
        
        <div className={`flex  pizza-item ${soldOut&&"filter"}`}>
            <img src={imageurl} alt=""  className="pizza-img"/>
            <div className="flex flex-column justify-content-center width-100 gap-1rem">
                <span className="bold font-roboto">{name}</span>
                <div className="flex ingredients felx-wrap font-roboto">
                {
                ingredients.map((e)=><span>{e}</span>)
                }
                </div>
                <div className={`flex item-center flex-wrap ${soldOut&&"none"} gap-1rem`}>
                    <span className="font-roboto">€{price}.00</span>
                    <div className="flex item-center gap-1rem price-options margin-left-auto ">
                        <div className="flex item-center gap ">
                            <button className="inc-dec-btn">-</button>
                            <span>1</span>
                            <button className="inc-dec-btn">+</button>
                        </div>
                        <button className="Btn-cart" onClick={click}>Delete</button>
                    </div>
                </div>
                <span className="font-roboto">{soldOut?"SOLD OUT":""}</span>
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
