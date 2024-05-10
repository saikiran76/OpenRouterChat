import Chat from "./Chat";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainContainer = ()=>{
    return(
        <>
            <Header/>
            <div className="flex">
                <Sidebar/>
                <Chat/>
            </div>
            
        </>

    )
}

export default MainContainer;