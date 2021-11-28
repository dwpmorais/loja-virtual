import React from 'react';
import SlickSlider from "react-slick";
import { Container} from './styles'

import banner from '../../assets/images/sliders/banner.jpg';
import bannerMobile from '../../assets/images/sliders/banner-mobile.jpg';

const Slider = (): JSX.Element => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    return (
        <Container>
            <SlickSlider {...settings}>
                <div>
                    <img src={banner} alt='banner' className="d-md-block d-none" />
                    <img src={bannerMobile} alt='banner' className="d-md-none d-block"  />
                </div>
                <div>
                    <img src={banner} alt='banner' className="d-md-block d-none" />
                    <img src={bannerMobile} alt='banner' className="d-md-none d-block"  />
                </div>
            </SlickSlider>
        </Container>
    )
}

export default Slider;
