import React from 'react';
import { IoSend } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="chatFooter">
            <div className="inp">
                <input type="text" name="" id="" placeholder='Message ChatGtp...' />
                <button><span><IoSend /></span></button>
            </div>
        </div>
    );
};

export default Footer;