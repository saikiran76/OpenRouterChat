import { FaCircleUser } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

const Chat = ()=>{
    return(
        <div className="chat w-[70em] bg-gray-900 h-screen font-man">
            <p className="text-white flex justify-end m-8 items-center gap-2"><FaCircleUser/>Jenkin</p>
            <div className="mess bg-gray-500 w-[30em] rounded flex float-right mr-4">
                <p className="text-gray-200 p-6 text-sm">
                    I pulled the trigger on the Galaxy Buds2 Pro and I've enjoyed them for the most part. I'll admit the ambient sound and the bad noise isolation during calls are the main things keeping them from being the best update since the Buds Plus. 
                </p>
            </div>

            <p className="text-white flex justify-start m-8 mt-[10em] items-center gap-2"><FaCircleUser/>Jenkin</p>

            <div className="mess bg-pink-600 w-[30em] rounded flex float-left ml-4">
                
                <p className="text-gray-200 p-6 text-sm">
                    I pulled the trigger on the Galaxy Buds2 Pro and I've enjoyed them for the most part. I'll admit the ambient sound and the bad noise isolation during calls are the main things keeping them from being the best update since the Buds Plus. 
                </p>

            </div>

            <div className="chatbox mt-[18rem] w-[100%] flex items-center justify-center ">
                <input placeholder="Type a message here.." className="bg-gray-400 text-white p-2 mr-2 border-red-700 border-l-4 border-r-4 border-t-4 border-b-4 rounded-lg w-[70%]"></input>
                <div className="cursor-pointer"><IoMdSend /></div>
            </div>
            


        </div>
    )
}

export default Chat;