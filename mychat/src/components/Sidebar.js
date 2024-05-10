import { MdNavigateBefore } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { FaEdit } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";

const Sidebar = () =>{
    return(
        <div className="relative h-screen w-[30em] bg-gray-700 border-pink-500 border-r-4 ">
            <div className="toolbar bg-black shadow-xl flex justify-between items-center h-[7%]">
                <div className="p-2 flex items-center">
                    <p className="text-white w-[5em] flex items-center font-man"><span className="m-1 text-white"><MdNavigateBefore /></span>Chats</p>
                    <p className="font-man">img:<span className="number ml-1 text-gray-300 font-man">3</span></p>
                    <p className="ml-2 text-white font-man">msg:</p>
                </div>
                
            </div>
            <div className="absolute bg-gradient-to-b from-black to-transparent w-full">
                    <p className="font-man">invisibl</p>
            </div>
           
            <img className="object-cover w-full h-[44%]" src="https://i.ytimg.com/vi/eKE6xpQ6hM4/maxresdefault.jpg" alt="jessica"/>

            <div className="name-tag absolute bottom-[18rem] text-transparent bg-gradient-to-b from-black to-transparent w-full p-5">
                <h1 className="text-white font-semibold text-lg font-man">Jessica Anderson</h1>
                <p className="text-white text-xs font-man">@jessica-anderson-2</p>

            </div>

            <div className="pink bg-gradient-to-b from-pink-600 to-black h-[48%]">
                <div className="m-2 bg-gray-900 flex justify-between rounded-xl font-man">
                    <div className="p-2 flex items-center gap-3 ">
                        <p className="flex text-white text-xs font-man"><span className="m-1"><FaCamera /></span>0</p>
                        <p className="flex text-white text-xs font-man"><span className="m-1"><LuMessageSquare /></span>0</p>
                    </div>

                    <div>
                        <h2 className="flex gap-2 text-white items-center text-sm p-2 font-man"><FaLock/>Make character public<IoShareSocialSharp /></h2>
                    </div>
        
                </div>

                <div className="m-1 bg-gray-900 flex justify-between rounded-lg">
                    <div className="p-4">
                        <h1 className="text-white font-bold text-base font-man">Who I am</h1>
                        <h2 className="text-white text-base font-semibold font-man">Personality</h2>
                        <h2 className="text-white text-sm font-man">care giver</h2>
                        <h2 className="text-white text-base font-semibold font-man">Work</h2>
                        <h2 className="text-white text-sm font-man">Yoga Instructor</h2>
                        <h2 className="text-white text-base font-semibold font-man">Hobbies</h2>
                        <h2 className="text-white text-sm font-man">Anime fan</h2>
                        <h2 className="text-white text-base font-semibold font-man">Relationship</h2>
                        <h2 className="text-white text-sm font-man">Friend</h2>
                    </div>

                    <div className="About p-4">
                        <div className="w-[12em]">
                            <h1 className="font-bold flex justify-between items-center text-white font-man">About<FaEdit/></h1>
                            <p className="text-white text-sm font-man">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        
                    </div>
                </div>

            </div>

            
        </div>

    )
}

export default Sidebar;