import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Banner = () => {
    return (
        <div >
            <Carousel >
                <div>
                   <img src="https://github.com/codermahbub20/bistro-boss-final-project-client-side/blob/main/src/assets/home/01.jpg?raw=true" alt="" />
                </div>
                <div>
                    <img src="https://github.com/codermahbub20/bistro-boss-final-project-client-side/blob/main/src/assets/home/02.jpg?raw=true" alt="" />
                </div>
                <div>
                    <img src="https://github.com/codermahbub20/bistro-boss-final-project-client-side/blob/main/src/assets/home/03.png?raw=true" alt="" />
                </div>
                <div>
                    <img src="https://github.com/codermahbub20/bistro-boss-final-project-client-side/blob/main/src/assets/home/04.jpg?raw=true" alt="" />
                </div>
                <div>
                    <img src="https://github.com/codermahbub20/bistro-boss-final-project-client-side/blob/main/src/assets/home/05.png?raw=true" alt="" />
                </div>
                <div>
                    <img src="https://github.com/codermahbub20/bistro-boss-final-project-client-side/blob/main/src/assets/home/06.png?raw=true" alt="" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
// 