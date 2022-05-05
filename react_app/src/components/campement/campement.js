import LoadImage from "../img-loader/loader";
import styled from "styled-components";
import colors from "../variables";

//images large
import largeImgCampement1 from "../../assets/img/large_campement_1.jpg";

// images Small
import smallImgCampement1 from "../../assets/img/small_campement_1.jpg";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  & .div-img {
    width: 100%;

    & img {
      border-radius: 0;
      height: 100%;
      min-height: 700px;
      @media all and (min-width: 480px) and (max-width: 767px) {
        object-position: -500px 0 ;
      }
      @media all and (max-width: 479px) {
        object-position: -550px 0 ;
      }
    }
  }
`;

const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: center;
  position: absolute;
  z-index: 2;
  color: ${colors.txt_white};
  margin: 1rem 0 0 0;

  & h1 {
    margin: 0 0 1rem 0;
    width: 90%;
    max-width: 30rem;
  }

  & p {
    font-size: 1rem;
    width: 90%;
    max-width: 30rem;
  }
`;

function Campement() {
  return (
    <Section>
      <DivTitle>
        <h1>
          Oseriez-vous relever le défi de passer une nuit dans le campement du
          jurassique ?
        </h1>
        <p>
          Un terrain de 2000m² mis à disposition pour y passer la nuit, le tout
          animé par de nombreux bruits plus terribles les uns que les autres.
          Feu de camp mis à disposition dans les aires prévues à cet effet !
        </p>
      </DivTitle>
      <div className="div-img">
        <LoadImage
          smallImgSrc={smallImgCampement1}
          largeImgSrc={largeImgCampement1}
        />
      </div>
    </Section>
  );
}

export default Campement;
