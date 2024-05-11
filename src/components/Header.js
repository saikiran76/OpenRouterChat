/**
 * Header component
 */



import { BsChatRightDotsFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { FaHeartCircleBolt } from "react-icons/fa6"
import { MdMenu} from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toogleMenu } from "./utils/appSlice";
import { FaCamera } from "react-icons/fa";
import ProfileDropdown from "./profileDrop";

const Header = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector(state => state.app.isMenuOpen);
    const toggleHandler = () => {
        setTimeout(() => {
            dispatch(toogleMenu());  
        }, 100);
    };

    return (
        <div className="bg-zinc-900 shadow-lg flex justify-between items-center font-man px-2 sm:px-4 py-1">
            <div className="flex items-center">
                <div className="logo flex items-center mr-2">
                    <button className="sm:hidden text-white" onClick={toggleHandler}>
                        <MdMenu size={24} />
                    </button>
                    <h1 className="font-bold text-white ml-2">secret<span className="bg-pink-500 text-white rounded-md px-1">desires</span><span className="block text-[0.5em] text-gray-300">Open Beta</span></h1>
                    
                </div>

                <div className="hidden sm:flex gap-6 items-center ml-4">
                    <h2 className="text-sm flex items-center text-white cursor-pointer border-pink-600 border-b-2 hover:border-pink-200 hover:text-pink-400" onClick={toggleHandler}>
                        <BsChatRightDotsFill className="mr-2" />Chat
                    </h2>
                    <h2 className="text-sm flex items-center text-white cursor-pointer">
                        <HiUsers className="mr-2" />My Characters
                    </h2>
                    <h2 className="text-sm flex items-center text-white cursor-pointer">
                        <FaCamera className="mr-2" />Generate Images
                    </h2>
                    <h2 className="bg-pink-600 rounded-md px-2 py-1 text-sm flex items-center text-white cursor-pointer">
                        <FaHeartCircleBolt className="mr-2" />Create Character
                    </h2>
                </div>
            </div>

            <div className="flex items-center">
                <ProfileDropdown/>
            </div>
        </div>
    );
};

export default Header;