import SimpleImageSlider from "react-simple-image-slider";
import styled from "styled-components";
import colors from "../variables";
import Btn from "../button";


// image
import sliderUn from "../../assets/img/slider_1_ccexpress.jpeg";
import sliderDeux from "../../assets/img/slider_2_ccexpress.jpeg";
import sliderTrois from "../../assets/img/slider_3_ccexpress.jpeg";
import sliderQuatre from "../../assets/img/slider_4_ccexpress.jpeg";

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

const Section = styled.section`
`;

const DivSlider = styled.div`
  position: relative;
  width: 100%;
  height: 600px;

  & .rsis-container :nth-child(1) {
    background-position: center;
  
  }
  & .rsis-container :nth-child(2) {
    background-position: center;
  }
`;

const BoxSlider = styled.div`
  height: 100%;
  left: 6%;
  z-index: 1;
  position: absolute;
  width: 25rem;
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
    margin: 1rem 0;
  }
`;

const DivContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & p {
    font-weight: 500;
    width: 90%;
    max-width: 28rem;
  }

  & h1,
  p {
    color: ${colors.txt_black};
  }

  & h1 {
    margin: 1rem 0 0 0;
    text-transform: uppercase;
    width: 90%;
    max-width: 28rem;
    text-align: center;
  }

  & p:nth-child(2) {
    margin: 1.5rem 0;
  }

  & p:nth-child(3) {
    margin: 0 0 1.5rem 0;
    width: 90%;
    max-width: 21rem;
    text-align: center;
  }

  & p:nth-child(4) {
    margin: 0 0 1.5rem 0;
  }

  & p:nth-child(7) {
    margin: 0 0 1.5rem 0;
  }
`;

const DivBtn = styled.div`
  display: flex;
  justify-content: center;
  @media all and (max-width: 479px) {
    align-items: center;
    flex-direction: column;
  }

  & .myBtn {
    margin: 1rem 0.5rem;
  }
`;



function Home() {
  const user = window.localStorage.getItem("user");

  return (
    <Section>
      <DivSlider>
        <BoxSlider>
          <h1> Une surface de plus de 3500m² </h1>
          <h1> Composé de 8 salles </h1>
          <h1> Un jardin et un campement ! </h1>
        </BoxSlider>
        <SimpleImageSlider
          style={{  }}
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
      <DivContent>
        <h1> Venez à la découverte de dinosauria </h1>
        <p>
          {" "}
          Partez à la découverte de l'histoire de la vie en visitant les
          galeries{" "}
        </p>
        <p>
          {" "}
          Nos galeries retracent l'histoire sur plus de 165 millions d'années au
          sein de leurs différentes salles{" "}
        </p>
        <p> Elles comprennent trois éres majeures </p>
        <p> Le Trias : -245 à -200 millions d'années </p>
        <p> Le Jurassique : -200 à -145 millions d'années </p>
        <p> Le Crétacé : -145 à -65 millions d'années </p>
      </DivContent>

      <DivBtn>
        {!user === true ? null : (
          <Btn
            link={"/postcommentaire"}
            disabled={false}
            bgGradient={colors.btn_gradient}
            textcolor={colors.txt_white}
            bd="none"
            bdhover="none"
            bghover={null}
            text="Poster un commentaire"
          />
        )}

        <Btn
          link={"/readcommentaire"}
          disabled={false}
          bgGradient={colors.btn_gradient}
          textcolor={colors.txt_white}
          bd="none"
          bdhover="none"
          bghover={null}
          text="Lire les commentaires"
        />
      </DivBtn>
    </Section>
  );
}

export default Home;
