import SideBar from "../Sidebar/SideBar";

const Home = () => {
    return (
        <div className="min-h-[100vh] grid grid-cols-12">

            <div className="border col-span-3  border-white">
                <SideBar></SideBar>
            </div>

            <div className="main border col-span-9 border-red-400">cc</div>

        </div>
    );
};

export default Home;