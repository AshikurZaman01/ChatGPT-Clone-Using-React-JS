import Chats from "./Chats";
import Footer from "./Footer";

const MainSection = () => {
    return (
        <div className="container pt-5">

            <div>
                <Chats></Chats>
            </div>

            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default MainSection;