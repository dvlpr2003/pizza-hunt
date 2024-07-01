import { Link } from "react-router-dom";
import {addToCart,decreaseItems,deleteItems,clearCart} from "./cartSlice"
import { useDispatch } from "react-redux"


import {useSelector } from "react-redux";

const Cart = ()=>{
    const dispatch = useDispatch()

    const cart = useSelector((state)=>state.cart.cart)
    
    const findUniqueObjects = (array) => {
        const seen = new Set();
        return array.filter(item => {
          const key = JSON.stringify(item);
          return seen.has(key) ? false : seen.add(key);
        });
      };
      const FilteredData = findUniqueObjects(cart)

    return(
        <div className="cart-main flex flex-column gap-1rem font-roboto">
            <Link to="/menu">Back to menu</Link>
            <h2>Your cart, h</h2>
            <Items FilteredData={FilteredData} cart={cart} dispatch={dispatch} />
            <CartBtn  cart={cart} dispatch={dispatch}/>
    
      
        </div>
    )
}
const Items = ({FilteredData,cart,dispatch})=>{

    return(
        <div className="width-100  font-roboto  gap-1rem ">
            {FilteredData.map((e)=><ItemList  name={e.name} id={e.id} cart={cart} price = {e.price} ingredients={e.ingredients} dispatch={dispatch}/>)}
            
        </div>
    )
}
const ItemList =({name,cart,id,price,ingredients,dispatch})=>{
    // const Delete = (id)=>{
    //     let FilteredItems = cart.filter((i)=>i.id !== id)
    //     setCart(FilteredItems)
    // }
    // const Dec = (id)=>{
    //     let Decreaze = cart.findIndex((item)=>item.id === id)
    //     if (Decreaze !== -1){
    //         const newArry = [...cart];
    //         newArry.splice(Decreaze, 1);
    //         setCart(newArry)
    //     }
    // }
    // const addElement=()=> {
    //     let cartItems = {
    //         id:id,
    //         name:name,
    //         price:price,
    //         ingredients:ingredients
    //     }
    //     if (cart) return setCart(()=>[...cart,cartItems])
    //     setCart([cartItems])
    // }
            let cartItems = {
            id:id,
            name:name,
            price:price,
            ingredients:ingredients
        }
    return(
        <div className="flex  cart-items flex-wrap pad-t-b border-bottom ">
                    <div className="flex margin-right-auto flex-start center gap">
                        <span>{cart.filter((item)=>item.id === id).length}x</span>
                        <span>{name}</span>
                    </div>
                    <div className="flex item-center margin-left-auto flex-end gap-1rem">
                        <span>€{cart.filter((item)=>item.id === id).length * price}</span>
                        <div className="flex gap-1rem center">
                            <div className="flex gap center">
                            <button className="inc-dec-btn" onClick={()=>dispatch(decreaseItems(id))}>-</button>
                            <span className="font-roboto">{cart.filter((item)=>item.id === id).length}</span>
                            <button className="inc-dec-btn" onClick={()=>dispatch(addToCart(cartItems))}>+</button>
                            </div>
                            <button className="Btn-cart" onClick={()=>dispatch(deleteItems(id))}>Delete</button>
                        </div>

                    </div>
     
            </div>
    )
}

const CartBtn = ({cart,dispatch})=>{

    return(
        <>
        <div className="cart-btn-container">
            {
    (cart.length>0)?<div className="flex gap-1rem">
                    <button className="cart-btn pad-r-l white-color"><Link to="/order/new">ORDER PIZZA</Link></button>
<button  className="cart-btn pad-r-l" onClick={()=>dispatch(clearCart())}>CLEAR CART</button>
                </div>:<h3>Your cart is still empty. Start adding some pizzas :)</h3>
            }
        </div>
        </>
    

    )
}




export default Cart;