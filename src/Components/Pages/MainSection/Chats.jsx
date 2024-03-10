import { FaUserLarge } from "react-icons/fa6";
import logo from "../../../assets/chatgptLogo.svg";

const Chats = () => {
    return (
        <div className="chats space-y-10 mb-10">

            <div className="chat flex items-start gap-10">
                <FaUserLarge className="text-6xl " />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestias beatae est asperiores consequuntur optio, rem sequi minima neque distinctio sunt omnis a deleniti suscipit accusamus corporis inventore! Corporis, commodi.</p>
            </div>

            <div className="chat flex items-start gap-10">
                <img src={logo}  className="rounded w-[25px]" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestias beatae est asperiores consequuntur optio, rem sequi minima neque distinctio sunt omnis a deleniti suscipit accusamus corporis inventore! Corporis, commodi.</p>
            </div>

        </div>
    );
};

export default Chats;
