import logo from "../../../assets/chatgpt.svg";
import { FiPlus } from "react-icons/fi";
import { LuMessageSquare } from "react-icons/lu";

const SideBar = () => {
    return (
        <div className="sideBar flex flex-col justify-between h-screen">
            <div className="upperSide flex flex-col my-[1rem] mx-[16px] space-y-5">
                <div className="upperSideTop space-y-5">
                    <div className="flex items-center gap-3">
                        <img className="logo" src={logo} alt="" />
                        <h1 className="text-3xl">ChatGtp</h1>
                    </div>
                    <button className="midBtn flex justify-center btn btn-md btn-primary w-full">
                        <span><FiPlus className="font-bold text-xl" /></span> New Chat
                    </button>
                </div>
                <div className="upperSideTop flex flex-col pt-6 space-y-4">
                    <button className="query btn btn-md bg-transparent text-white hover:bg-primary gap-5 items-center flex">
                        <span><LuMessageSquare className="text-xl" /></span> What is programming ?
                    </button>
                    <button className="query btn btn-md bg-transparent text-white hover:bg-primary gap-5 items-center flex">
                        <span><LuMessageSquare className="text-xl" /></span> How To Use API ?
                    </button>
                </div>
            </div>
           
            <div className="lowerSide bg-red-300">
                <div>ff</div>
            </div>
            
        </div>
    );
};

export default SideBar;
