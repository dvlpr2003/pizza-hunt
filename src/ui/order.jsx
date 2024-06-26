

const Order =({cart,priority,setPriority})=>{
    console.log(cart)
    function cout(e,v){
        if (priority){
            if (v.price === 12) return e+v.price+2.40;
            if (v.price === 15) return e+v.price+3;
            if (v.price === 16) return e+v.price+3.20;
            // console.log("hello")
        }
        return e+v.price
    }
    return(
        <div className="flex flex-column  gap-1rem font-roboto order-container">
            <h4>Ready to order? Let's go!</h4>
            <div className="">
                <form className="flex flex-column gap-1rem" >
                    <div className="flex gap-1rem font-roboto item-center">

                    <label htmlFor="first-name">Name</label>
                    <input type="text" id="first-name" className="width-100" required/>
                    </div>
                    <div className="flex gap-1rem font-roboto item-center">
                    <label htmlFor="ph-num">Phone number</label>
                    <input type="text" id="ph-num" className="width-100" required />

                    </div>
                    <div className="flex gap-1rem font-roboto item-center">
                    <label htmlFor="address">Address</label>
                    <div className="width-100 position-relative ">
                    <input type="text" id="address"  className="width-100 " />
                    <button className="position-absolute gprs pad-r-l">GET POSITION</button>
                    </div>


                    </div>
                </form>
            </div>
            <div className="flex gap-1rem font-roboto item-center">

            <input type="checkbox"  className="checkbox" onClick={()=>{
                setPriority((e)=>!e)
                 cout()
            }} />
            <span>Want to yo give your order priority?</span>
            </div>
            <div>
            <button className="order-btn pad-r-l white-color flex gap center"><span>ORDER PIZZA NOW</span><span className="bold">€{cart.reduce((e,v)=>cout(e,v),0).toFixed(1)}0</span></button>
            </div>

        </div>
    )
}

export default Order;