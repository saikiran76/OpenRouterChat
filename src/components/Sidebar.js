import { MdNavigateBefore } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { FaEdit } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toogleMenu } from "./utils/appSlice";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiTool } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Details } from "./utils/Details";
import lady from "../lady_new.jpeg"

const Sidebar = () =>{
    const dispatch = useDispatch()
    const isMenuOpen = useSelector(state => state.app.isMenuOpen);
    if(!isMenuOpen) return null;

    const toogleHandler = ()=>{
        setTimeout(() => {
            dispatch(toogleMenu());
          }, 100);
    }

    return(
        <div className="relative h-screen w-[45em] md:w-[30em] bg-gray-700 border-pink-500 border-r-4 overflow-hidden">
            <div className="toolbar bg-black shadow-xl flex justify-between items-center h-[7%] text-xs ">
                <div className="p-2 flex items-center">
                    <p className="text-white w-[5em] flex items-center font-man" onClick={()=>toogleHandler()}><span className="m-1 text-white cursor-pointer"><MdNavigateBefore /></span>Chats</p>
                    <p className="font-man">img:<span className="number ml-1 text-gray-300 font-man">3</span></p>
                    <p className="ml-2 text-white font-man">msg:</p>
                </div>

                <div className="flex gap-2 m-1">
                    <div className="text-white"><BsThreeDotsVertical/></div>
                    <div className="text-white"><FiTool/></div>
                    <div className="text-white"><FaEdit/></div>
                    <div className="text-white"><IoMdClose/></div>

                </div>
                
            </div>
            <div className="absolute bg-gradient-to-b from-black to-transparent w-full">
                    <p className="font-man">invisibl</p>
            </div>
           
            <img className="anderson object-cover h-[50%]" src={lady} alt="jessica"/>

            <div className="name-tag absolute bottom-[17rem] text-transparent bg-gradient-to-b from-black to-transparent w-full p-5">
                <h1 className="text-white font-semibold text-lg font-man">Jessica Anderson</h1>
                <p className="text-white text-xs font-man">@jessica-anderson-2</p>

            </div>

            <div className="pink bg-gradient-to-b from-pink-600 to-black h-[48%]">
                <div className="m-2 bg-gray-900 flex items-center justify-between rounded-xl font-man">
                    <div className="p-2 flex items-center gap-3 ">
                        <p className="flex text-white text-xs font-man"><span className="m-1"><FaCamera /></span>0</p>
                        <p className="flex text-white text-xs font-man"><span className="m-1"><LuMessageSquare /></span>0</p>
                    </div>

                    <div>
                        <h2 className="hidden md:flex lg:flex gap-2 text-white items-center text-sm p-2 font-man"><FaLock/>Make character public<IoShareSocialSharp /></h2>
                    </div>
        
                </div>

                <div className="m-1 bg-gray-900 flex justify-between rounded-lg ">
                    <div className="p-4">
                    <h1 className="text-white font-bold text-xs md:text-base font-man mb-2">Who I am</h1>
                        {Details.map((item, index)=>(
                            <div key={index}>
                                <h2 className="text-white text-xs md:text-sm font-semibold font-man">{item.Question}</h2>
                                <h2 className="text-white text-xs font-man mb-1">{item.Answer}</h2>
                            </div>
                        ))}
                    </div>

                    <div className="About p-4">
                        <div className="w-[12em]">
                            <h1 className="font-bold hidden md:flex justify-between items-center text-white font-man mb-2 text-xs md:text-base">About<FaEdit/></h1>
                            <p className="text-white hidden md:block text-[0.5rem] md:text-xs font-man">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        
                    </div>
                </div>

            </div>

            
        </div>

    )
}

export default Sidebar;