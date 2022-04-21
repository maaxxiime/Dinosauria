import SimpleImageSlider from "react-simple-image-slider";
import styled from "styled-components";
import colors from "../variables";
import { useState, useEffect } from "react";
import Btn from "../button";
import axios from "axios";
import { apiurl } from "../variables";
import qs from "qs";
import sliderUn from "../../assets/img/slider_1_ccexpress.jpeg"
import sliderDeux from "../../assets/img/slider_2_ccexpress.jpeg"
import sliderTrois from "../../assets/img/slider_3_ccexpress.jpeg"
import sliderQuatre from "../../assets/img/slider_4_ccexpress.jpeg"



const images = [
    { url: sliderUn},
    { url: sliderDeux},
    { url: sliderTrois},
    { url: sliderQuatre},
];

const SliderOptions = {
    loop: true,
    autoPlay: true,
    autoPlayDelay: 2,
    duration: 1.5,
};

const Section = styled.section`

`;


function Home() {
    return (
    <Section>
        <SimpleImageSlider
          width={1903}
          height={600}
          images={images}
          showBullets={true}
          showNavs={true}
          loop={SliderOptions.loop}
          autoPlay={SliderOptions.autoPlay}
          autoPlayDelay={SliderOptions.autoPlayDelay}
          slideDuration={SliderOptions.duration}
        />
    </Section>
    )
}

export default Home;