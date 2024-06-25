import { Link } from "react-router-dom";

const Cart = ({cart,setCart})=>{
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
            <Items FilteredData={FilteredData} cart={cart} setCart={setCart}/>
            <CartBtn setCart={setCart}/>
    
      
        </div>
    )
}
const Items = ({FilteredData,cart,setCart})=>{

    return(
        <div className="width-100  font-roboto  gap-1rem ">
            {FilteredData.map((e)=><ItemList  name={e.name} id={e.id} cart={cart} price = {e.price} ingredients={e.ingredients} setCart={setCart}/>)}
            
        </div>
    )
}
const ItemList =({name,cart,id,price,ingredients, setCart})=>{
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
        <div className="flex  cart-items flex-wrap pad-t-b border-bottom ">
                    <div className="flex margin-right-auto flex-start center gap">
                        <span>{cart.filter((item)=>item.id === id).length}x</span>
                        <span>{name}</span>
                    </div>
                    <div className="flex item-center margin-left-auto flex-end gap-1rem">
                        <span>€{cart.filter((item)=>item.id === id).length * price}</span>
                        <div className="flex gap-1rem center">
                            <div className="flex gap center">
                            <button className="inc-dec-btn" onClick={()=>Dec(id)}>-</button>
                            <span className="font-roboto">{cart.filter((item)=>item.id === id).length}</span>
                            <button className="inc-dec-btn" onClick={addElement}>+</button>
                            </div>
                            <button className="Btn-cart" onClick={()=>Delete(id)}>Delete</button>
                        </div>

                    </div>
     
            </div>
    )
}

const CartBtn = ({setCart})=>{
    function Clear(){
        setCart([])

    }
    return(
        <div className="cart-btn-container">
            <button className="cart-btn pad-r-l">ORDER PIZZA</button>
            <button onClick={Clear} className="cart-btn pad-r-l">CLEAR CART</button>
        </div>
    )
}


export default Cart;