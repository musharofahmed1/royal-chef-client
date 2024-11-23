import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import RcDescription from "../RcDescription/RcDescription";
import Contact from "../Testimonials/Contact/Contact";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";



const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <RcDescription/>
            <PopularMenu/>
            <Contact/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;