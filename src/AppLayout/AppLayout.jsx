import { Outlet } from "react-router-dom";
import Header from "../component/header";

function AppLayout(){
    return(
        <div>
            <Header/>
            <main  className = "flex flex-column center scroll width-100 pad-t-b">
                <Outlet/>
            </main>
        </div>
    )
}

export default AppLayout;