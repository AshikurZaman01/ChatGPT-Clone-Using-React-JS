import { IoSend } from "react-icons/io5";
import { useState } from "react";
import { sendMsgToOpenAi } from "../../OpenAI";


const Footer = () => {

    const [input, setInput] = useState('');

    const handleSendMsg = () => {
        const res = sendMsgToOpenAi();
    }

    return (
        <div className="chatFooter">
            <div className="inp">
                <input value={input} onChange={() => setInput(e.target.value)} type="text" name="" id="" placeholder='Message ChatGtp...' />
                <button><span><IoSend /></span></button>
            </div>
        </div>
    );
};

export default Footer;