import SectionTitle from "../../../SectionTitle/SectionTitle";
import featuredImg from '../../../../assets/home/featured.jpg';
import '../Featured/Featured.css';
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading = "check it out" heading = "Featured Item"></SectionTitle>

            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-30 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt=""/>
                </div>
                <div className="md:ml-10">
                    <p>Agu 11, 2023</p>
                    <p>Where I can get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut 
                        quidem rem saepe expedita impedit vel quaerat omnis commodi, 
                        maxime labore maiores adipisci vero asperiores nostrum, quo neque,
                         nihil animi exercitationem voluptas minima atque doloribus quos 
                         id nesciunt. Inventore pariatur illum quo a eos similique? 
                         Aliquam consectetur quaerat enim voluptatem expedita!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;