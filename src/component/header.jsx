const Header = ()=>{
    return(
        <header 
        className="header flex item-center justify-content flex-wrap">
            <h4>Fast Pizza co.</h4>
            <form>
                <input type="text"  placeholder="Search by id " className="input-border pad-t-b pad-r-l transitions radius"/>
            </form>
        </header>
    )
}
export default Header;
