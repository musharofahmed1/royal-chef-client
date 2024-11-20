import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner/Banner";



const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <PopularMenu/>
        </div>
    );
};

export default Home;