import logo from "../../../assets/chatgpt.svg";
import { FiPlus } from "react-icons/fi";
import { LuMessageSquare } from "react-icons/lu";
import { IoMdHome } from "react-icons/io";
import { SlBadge } from "react-icons/sl";
import { FcApproval } from "react-icons/fc";
import { Link } from "react-router-dom";

const SideBar = () => {
    const gtpList = [
        { id: 1, name: "Home", path: "/", icon: <IoMdHome /> },
        { id: 2, name: "Saved", path: "/saved", icon: <SlBadge /> },
        { id: 3, name: "Upgrade to Pro", path: "/pro", icon: <FcApproval /> },
    ];

    return (
        <div className="sideBar flex flex-col justify-between h-screen" style={{ position: "fixed", borderRight: "2px solid #333", borderBottom: "2px solid #333" }}>
            <div className="upperSide flex flex-col my-[1rem] mx-[16px] space-y-5 h-[80%] border-b border-gray-800 px-5">
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

            <div className="lowerSide h-[20%]  border-gray-800">
                <div>
                    <ul className="flex flex-col items-start space-y-2 ">
                        {gtpList.map((item) => (
                            <li key={item.id}>
                                <Link to={item.path} className="text-white flex items-center gap-3">
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
