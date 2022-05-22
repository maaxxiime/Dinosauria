import SimpleImageSlider from "react-simple-image-slider";
import styled from "styled-components";
import colors from "../variables";

// image
import sliderUn from "../../assets/img/slider_jardin_1.jpg";
import sliderDeux from "../../assets/img/slider_jardin_2.jpg";
import sliderTrois from "../../assets/img/slider_jardin_3.jpg";
import sliderQuatre from "../../assets/img/slider_jardin_4.jpg";

const images = [
  { url: sliderUn },
  { url: sliderDeux },
  { url: sliderTrois },
  { url: sliderQuatre },
];

const SliderOptions = {
  loop: true,
  autoPlay: true,
  autoPlayDelay: 2.5,
  duration: 1.5,
};

const Section = styled.section``;

const DivSlider = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
`;

const BoxSlider = styled.div`
  height: 100%;
  left: 8%;
  z-index: 1;
  position: absolute;
  width: 23rem;
  color: ${colors.txt_white};
  background-color: rgb(0, 0, 0, 0.4);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    left: 0;
    width: 100%;
    height: 260px;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    left: 0;
    width: 100%;
    height: 260px;
  }
  @media all and (max-width: 479px) {
    left: 0;
    width: 100%;
    height: 260px;
  }

  h1 {
    margin: 0.5rem 0;
  }
`;

const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${colors.txt_black};
  & h1 {
    margin: 1rem 0;
    width: 90%;
    max-width: 28rem;
  }
  & p {
    width: 90%;
    max-width: 30rem;
    font-size: 1rem;
    margin: 0 0 1rem 0;
  }
`;

function Jardin() {
  return (
    <Section>
      <DivTitle>
        <h1> Prenez le temps de découvrir notre jardin d'époque </h1>
        <p>
          Visitez une des plus belles reconstitutions jamais réalisées à ce jour
        </p>
      </DivTitle>
      <DivSlider>
        <BoxSlider>
          <h1>
            Visitez le jardin, composé de plus de 40 figurines grandeur nature,
            sur une superficie total de plus de 5000m²
          </h1>
        </BoxSlider>
        <SimpleImageSlider
          width={"100%"}
          height={600}
          images={images}
          showBullets={true}
          showNavs={true}
          loop={SliderOptions.loop}
          autoPlay={SliderOptions.autoPlay}
          autoPlayDelay={SliderOptions.autoPlayDelay}
          slideDuration={SliderOptions.duration}
        />
      </DivSlider>
    </Section>
  );
}

export default Jardin;
