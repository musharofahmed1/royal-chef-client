import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import RcDescription from "../Pages/Home/RcDescription/RcDescription";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet/>
            <RcDescription></RcDescription>
            
            <Footer/>
        </div>
    );
};

export default MainLayout;