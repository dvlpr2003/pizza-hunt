
import "../App.css"
import getData from "../services/api"
import { Link, useLoaderData } from "react-router-dom"

const Menu = ({cart,setCart})=>{
    // const [cartItems,setCartItems]=useState()
    const menu = useLoaderData()
   
    // localStorage.setItem("items",JSON.stringify(menu))
    // useEffect(()=>{
    //     const item = JSON.parse(localStorage.getItem)

    // },[])
   
    return(
        <>
        {
            menu&&<MenuItems Menudata={menu} setCart={setCart} cart={cart}/>
        }
        {(cart === null) || (cart.length >0)&&<CartNav cart={cart}/>}
        </>
    )
}
const MenuItems = ({Menudata,setCart,cart})=>{
 
    return(
        
        <div>

            <div className="flex flex-column center width-100 gap ">

            {
            Menudata.map((e)=><Items key = {e.id} id={e.id} name={e.name} price ={e.unitPrice} imageurl ={e.imageUrl} soldOut={e.soldOut} ingredients={e.ingredients} setCart={setCart} cart={cart}/>)
            }

            </div>
      
        </div>
    )
}
const Items =({name,price,imageurl,soldOut,ingredients,id,setCart,cart})=>{
    const Delete = (id)=>{
        let FilteredItems = cart.filter((i)=>i.id !== id)
        setCart(FilteredItems)
    }
    const Dec = (id)=>{
        let Decreaze = cart.findIndex((item)=>item.id === id)
        if (Decreaze !== -1){
            const newArry = [...cart];
            newArry.splice(Decreaze, 1);
            setCart(newArry)
        }
    }
    const addElement=()=> {
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
                        {
                        (cart&&cart.some((item)=>item.id===id))?<div className="flex item-center gap ">
                            <button className="inc-dec-btn" onClick={()=>Dec(id)}>-</button>
                            <span className="font-roboto">{cart.filter((item)=>item.id === id).length}</span>
                            <button className="inc-dec-btn" onClick={addElement}>+</button>
                        </div>:""
                        }       
                        {
                        (cart&&cart.some((item)=>item.id===id))?<button className="Btn-cart" onClick={()=>Delete(id)}>Delete</button>:<button className="Btn-cart" onClick={addElement}>Add to cart</button>
                        }
                    </div>
                </div>
                <span className="font-roboto">{soldOut?"SOLD OUT":""}</span>
            </div>
        </div>
        
    )
}
export const CartNav = ({cart})=>{
    let count = cart&&cart.reduce((e,v)=>e=e+v.price,0)
    return (
        <div className="cart-nav flex item-center pad-r-l font-roboto bold">
            <div className="flex center gap ">
            <span>{cart.length}</span>
            <span>Pizza</span>
            </div>
            <div className="flex center">
                <span>€{count}.00</span>
            </div>
            <div className="open-cart flex center ">
                <Link to="/cart" className="white-color" >open cart</Link>
            </div>
        </div>
    )
}


export default Menu;
