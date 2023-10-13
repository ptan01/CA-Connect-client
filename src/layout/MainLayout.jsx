import { Outlet } from "react-router-dom";
import Navbar from "../sharedCompo/Navbar";
import Footer from "../sharedCompo/Footer";

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;