import SideBar from "../Sidebar/SideBar";

const Home = () => {
    return (
        <div className="min-h-[100vh] grid grid-cols-12">

            <div className=" col-span-3  ">
                <SideBar></SideBar>
            </div>

            <div className="main col-span-9">cc</div>

        </div>
    );
};

export default Home;