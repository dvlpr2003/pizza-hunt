import Header from "../component/header"
import "../App.css"
import { useEffect ,useState} from "react"
import getData from "../services/api"

const Menu = ()=>{
    const [Menudata,setMenudata]=useState(null)
    console.log(Menudata)
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
            Menudata&&<MenuItems Menudata={Menudata}/>
        }
        <CartNav/>
        </>
    )
}

const MenuItems = ({Menudata})=>{
    return(
        <main className = "flex flex-column center scroll main-gap">
            {
            Menudata.map((e)=><Items key={e.id} name={e.name} price ={e.unitPrice} imageurl ={e.imageUrl} soldOut={e.soldOut}/>)
            }
        </main>
    )
}
const Items =({name,price,imageurl,soldOut})=>{
    return(
        
            <div className={`menuitem flex item-center ${soldOut&&"filter"}`}>
                <img src={imageurl} alt=""  className="pizza-img"/>
                <div className="flex flex-column container2">
                    <span className="bold">{name}</span>
                    <span>Tomato, Mozzarella, Basil</span>
                    <div className="flex item-center flex-warp price-and-quantity">
                        <span>€{price}.0</span>
                        <div className={`flex options-container ${soldOut&&"none"}`}>
                            <div className="flex center inc-dec-container">
                                <div className="inc-dec flex center"><span>-</span></div>
                                <span>1</span>
                                <div className="inc-dec flex center"> <span>+</span></div>
                            </div>
                            <button className="add-to-cart-and-dlt">
                                DELETE
                            </button>
                        </div>

                    </div>
                    <span>{soldOut? "SOLD OUT":""}</span>

                </div>
            </div>
       
    )
}


export const CartNav = ()=>{
    return (
        <div className="cart-nav">
            
        </div>
    )
}


export default Menu;
