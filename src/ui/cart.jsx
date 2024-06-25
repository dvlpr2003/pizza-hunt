const Cart = ()=>{

    return(
        <div className="cart-main border flex flex-column center gap-1rem">
            <Items/>
      
        </div>
    )
}
const Items = ({cart})=>{
    return(
        <div className="width-100 pad-t-b font-roboto">
            <div className="flex  cart-items flex-wrap">
                    <div className="flex margin-right-auto flex-start center gap">
                        <span>1x</span>
                        <span>Pepperoni</span>
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