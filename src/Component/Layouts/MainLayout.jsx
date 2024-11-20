import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Category from "../Pages/Home/Category/Category";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet/>
            
            <Footer/>
        </div>
    );
};

export default MainLayout;