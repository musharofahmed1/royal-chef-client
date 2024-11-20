import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bg1 from '../../../../../assets/home/01.jpg'
import bg2 from '../../../../../assets/home/02.jpg'
import bg3 from '../../../../../assets/home/03.png'
import bg4 from '../../../../../assets/home/04.jpg'
import bg5 from '../../../../../assets/home/05.png'
import bg6 from '../../../../../assets/home/06.png'

const Banner = () => {
    return (
        <div >
            <Carousel >
                <div>
                   <img src={bg1} alt="" />
                </div>
                <div>
                    <img src={bg2} alt="" />
                </div>
                <div>
                    <img src={bg3} alt="" />
                </div>
                <div>
                    <img src={bg4} alt="" />
                </div>
                <div>
                    <img src={bg5} alt="" />
                </div>
                <div>
                    <img src={bg6} alt="" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
