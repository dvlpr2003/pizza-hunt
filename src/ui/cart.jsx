import { Link } from "react-router-dom";

const Cart = ({cart})=>{
    const findUniqueObjects = (array) => {
        const seen = new Set();
        return array.filter(item => {
          const key = JSON.stringify(item);
          return seen.has(key) ? false : seen.add(key);
        });
      };
      const FilteredData = findUniqueObjects(cart)

    return(
        <div className="cart-main flex flex-column center gap-1rem">
            <Link to="/menu">Back to menu</Link>
            {FilteredData.map((e)=><Items name={e.name} id={e.id} cart={cart}/>)}
    
      
        </div>
    )
}
const Items = ({name,cart,id})=>{
    return(
        <div className="width-100 pad-t-b font-roboto border-bottom">
            <div className="flex  cart-items flex-wrap">
                    <div className="flex margin-right-auto flex-start center gap">
                        <span>{cart.filter((item)=>item.id === id).length}x</span>
                        <span>{name}</span>
                    </div>
                    <div className="flex item-center margin-left-auto flex-end gap-1rem">
                        <span>€14.00</span>
                        <div className="flex gap-1rem center">
                            <div className="flex gap center">
                            <button className="inc-dec-btn">-</button>
                            <span className="font-roboto">1</span>
                            <button className="inc-dec-btn" >+</button>
                            </div>
                            <button className="Btn-cart" >Delete</button>
                        </div>

                    </div>
     
            </div>
        </div>
    )
}
export default Cart;