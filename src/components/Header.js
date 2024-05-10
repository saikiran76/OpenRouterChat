import { BsChatRightDotsFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { FaHeartCircleBolt } from "react-icons/fa6"
import { MdNavigateNext } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toogleMenu } from "./utils/appSlice";

const Header = () =>{
    const dispatch = useDispatch()
    const isMenuOpen = useSelector(state => state.app.isMenuOpen);

    const toogleHandler = ()=>{
        setTimeout(() => {
            dispatch(toogleMenu());
          }, 100);
    }


    return(
        <div className="bg-gray-900 shadow-lg flex justify-between font-man">
            <div className="flex items-center p-2">
                <div className="logo m-2">
                    <h1 className="font-bold text-white">secret<span className="bg-pink-500 text-white rounded-md p-1 m-1">desires</span></h1>
                    {isMenuOpen && <p className="text-zinc-400 text-xs mt-1">Open beta</p>}

                    {!isMenuOpen && <div className="text-white mt-1 cursor-pointer" onClick={()=>toogleHandler()}><MdNavigateNext /></div>}
                    
                </div>

                <div className="flex gap-6 items-center justify-center ml-[18em]">
                    <h2 className="border-pink-400 text-sm border-b-2 flex items-center text-white cursor-pointer" onClick={()=>toogleHandler()}><span className="mr-2 "><BsChatRightDotsFill /></span>Chat</h2>   
                    <h2 className="border-pink-400 text-sm border-b-2 flex items-center text-white cursor-pointer w-[9em]"><span className="mr-2 "><HiUsers /></span>My Characters</h2>   
                    <h2 className="border-pink-400 text-sm border-b-2 flex items-center text-white cursor-pointer w-[9.5em]"><span className="mr-2 "><BsChatRightDotsFill /></span>Generate Images</h2>   
                    <h2 className="border-pink-400 bg-pink-600 rounded-md p-2 text-sm border-b-2 flex items-center text-white cursor-pointer w-[11em]"><span className="mr-2 "><FaHeartCircleBolt /></span>Create Character</h2>   
                    

                </div>

            </div>

            <div className="flex items-center m-2 gap-1">
                <FaCircleUser style={{color:"#fff"}} />
                <h2 className="text-white">My Profile</h2>
                <FaCaretDown style={{color:"#fff"}} />

            </div>
        </div>


    )
}

export default Header;