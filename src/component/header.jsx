
import { useSelector } from "react-redux";

const Header = ()=>{

    const botname = useSelector((state)=>state.user.username)

  

    
    return(
        <header 
        className="header flex item-center justify-content flex-wrap width">
            <h4>Pizza hunt</h4>
            <form>
                <input type="text"  placeholder="Search by id " className="input-border pad-t-b pad-r-l transitions radius" />
                
            </form>
                <p>{botname}</p>
        </header>
    )
}
export default Header;
