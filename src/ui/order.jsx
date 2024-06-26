const Order =()=>{
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

            <input type="checkbox"  className="checkbox"/>
            <span>Want to yo give your order priority?</span>
            </div>
            <div>
            <button className="order-btn pad-r-l white-color">ORDER PIZZA</button>
            </div>

        </div>
    )
}

export default Order;