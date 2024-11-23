import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import RcDescription from "../Pages/Home/RcDescription/RcDescription";
import PopularMenu from "../Pages/Home/PopularMenu/PopularMenu";


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