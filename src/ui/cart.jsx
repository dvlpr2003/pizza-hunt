const Cart = ()=>{

    return(
        <div>
            <Items/>
        </div>
    )
}
const Items = ({cart})=>{
    return(
        <div>
            <div className="flex center">
                    <div className="flex">
                        <span>1x</span>
                        <span>Pepperoni</span>
                    </div>
                    <div className="flex center">
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