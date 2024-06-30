
import "../App.css";
import { useDispatch } from "react-redux"
import getData from "../services/api";
import { Link, useLoaderData } from "react-router-dom";
import {useSelector} from "react-redux";
import {addToCart,decreaseItems,deleteItems} from "./cartSlice"
// function reducer(state,action){
  
//     if (action.type === "add"){
       
//        if (state) return [...state,action.cartItems]
//        return([action.cartItems])
//     }
//     if (action.type === "dec"){
//         let Decreaze = state.findIndex((item)=>item.id === action.id)
//         if (Decreaze !== -1){
//             const newArry = [...state];
//             newArry.splice(Decreaze, 1);
//             return [...newArry]
//         }
//     }
//     if (action.type === "delete"){
//         let FilteredItems = state.filter((i)=>i.id !== action.id)
//         return([...FilteredItems])

//     }
// }
const Menu = ()=>{
    
    // const [cart,setCarts]=useReducer(reducer,[])
    const cart =useSelector((state)=>state.cart.cart)
    console.log(cart)
    const menu = useLoaderData()

   
    return(
        <>
        {
            menu&&<MenuItems Menudata={menu} cart={cart}/>
        }
        {((cart === null) || (cart.length >0))&&<CartNav cart={cart}/>}
        </>
    )
}
const MenuItems = ({Menudata,setCart,cart})=>{
 
    return(
        
        <div>

            <div className="flex flex-column center width-100 gap ">

            {
            Menudata.map((e)=><Items key = {e.id} id={e.id} name={e.name} price ={e.unitPrice} imageurl ={e.imageUrl} soldOut={e.soldOut} ingredients={e.ingredients}  cart={cart}/>)
            }

            </div>
      
        </div>
    )
}
const Items =({name,price,imageurl,soldOut,ingredients,id,cart})=>{
        let cartItems = {
            id:id,
            name:name,
            price:price,
            ingredients:ingredients
        }
        const dispatch = useDispatch()

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
                            <button className="inc-dec-btn" onClick={()=>dispatch(decreaseItems(id))}>-</button>
                            <span className="font-roboto">{cart.filter((item)=>item.id === id).length}</span>
                            <button className="inc-dec-btn" onClick={()=>dispatch(addToCart(cartItems))}>+</button>
                        </div>:""
                        }       
                        {
                        (cart&&cart.some((item)=>item.id===id))?<button className="Btn-cart" onClick={()=>dispatch(deleteItems(id))}>Delete</button>:<button className="Btn-cart" onClick={()=>dispatch(addToCart(cartItems))}>Add to cart</button>
                        }
                    </div>
                </div>
                <span className="font-roboto">{soldOut?"SOLD OUT":""}</span>
            </div>
        </div>
        
    )
}
export const CartNav = ({cart})=>{
    function cout (e,v){
        return e+v.price

    }
    let count = cart&&cart.reduce((e,v)=>cout(e,v),0)
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
export async function menuloader(){
    const menu = await getData()
    
    return menu 
  }

export default Menu;