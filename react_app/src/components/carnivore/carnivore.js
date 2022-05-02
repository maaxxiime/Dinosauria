import LoadImage from "../img-loader/loader";
import styled from "styled-components";
import colors from "../variables";

//images large
import largeImgCarnivore1 from "../../assets/img/largecarnivore1.jpeg";
import largeImgCarnivore2 from "../../assets/img/largecarnivore2.jpeg";
import largeImgCarnivore3 from "../../assets/img/largecarnivore3.jpeg";
import largeImgCarnivore4 from "../../assets/img/largecarnivore4.jpeg";

// images Small
import smallImgCarnivore1 from "../../assets/img/smallcarnivore1.jpg";
import smallImgCarnivore2 from "../../assets/img/smallcarnivore2.jpg";
import smallImgCarnivore3 from "../../assets/img/smallcarnivore3.jpg";
import smallImgCarnivore4 from "../../assets/img/smallcarnivore4.jpg";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  & .Content {
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: ${colors.background_black};
    color: ${colors.txt_white};

    & .texte {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 20%;
      margin: 0 10% 0 40%;

      & h2 {
        margin: 1rem 0;
      }
    }
  }
  & .Content:nth-child(odd) {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: auto;
    background-color: ${colors.background_white};
    color: ${colors.txt_black};

    & .texte {
      display: flex;
      flex-direction: column;
      width: 20%;
      margin: 0 40% 0 10%;
    }
  }

  & .div-img {
    width: 500px;
    height: 350px;
    margin: 1rem 0;
  }
`;

const DivTitle = styled.div`
  text-align: center;
  color: ${colors.txt_black};

  & h1 {
    margin: 1rem 0;
  }

  & p {
    font-size: 1rem;
    margin: 0 0 1rem 0;
  }
`;

function Carnivore() {
  return (
    <Section>
      <DivTitle>
        <h1> La salle des Carnivores </h1>
        <p> découvrez parmi les plus beau squelettes jamais découvert </p>
      </DivTitle>
      <div className="Content">
        <div className="texte">
          <h2> Le Tyrannosaure-Rex : </h2>
          <p>
            Le Tyrannosaurus-rex ou T-rex était un dinosaure superprédateur au
            sommet de la chaîne alimentaire, chassant notamment des herbivores
            de grande taille comme les Hadrosaures ou les Cératopsiens, famille
            du célèbre Triceratops. Le nom Tyrannosaurus-rex signifie le « roi
            des lézards tyrans ».
          </p>
        </div>
        <div className="div-img">
          <LoadImage
            smallImgSrc={smallImgCarnivore1}
            largeImgSrc={largeImgCarnivore1}
          />
        </div>
      </div>

      <div className="Content">
        <div className="texte">
          <h2> L'Allosaurus : </h2>
          <p>
            Allosaurus « lézard différent » est un genre éteint de dinosaures
            théropodes ayant vécu il y a 155 à 150 millions d'années environ, au
            Kimméridgien et au Tithonien Jurassique supérieur dans ce qui est
            actuellement l'Amérique du Nord et l'Europe.
          </p>
        </div>
        <div className="div-img">
          <LoadImage
            smallImgSrc={smallImgCarnivore2}
            largeImgSrc={largeImgCarnivore2}
          />
        </div>
      </div>

      <div className="Content">
        <div className="texte">
          <h2> L'Albertosaurus : </h2>
          <p>
            Albertosaurus ce qui signifie « lézard de l'Alberta » est un genre
            de dinosaure théropode de la famille des tyrannosauridés qui vivait
            dans l'Ouest de l'Amérique du Nord au début du Maastrichtien
            Crétacé supérieur, il y a 73 à 70 millions d'années.
          </p>
        </div>
        <div className="div-img">
          <LoadImage
            smallImgSrc={smallImgCarnivore3}
            largeImgSrc={largeImgCarnivore3}
          />
        </div>
      </div>

      <div className="Content">
        <div className="texte">
          <h2> Le Carnosaurus : </h2>
          <p>
            Carnotaure est un genre éteint de dinosaures saurischiens
            prédateurs, de la famille des Abelisauridae. Il vivait en Argentine
            il y a environ 70 millions d'années à la fin du Crétacé supérieur et
            a été découvert par José Bonaparte.
          </p>
        </div>
        <div className="div-img">
          <LoadImage
            smallImgSrc={smallImgCarnivore4}
            largeImgSrc={largeImgCarnivore4}
          />
        </div>
      </div>
    </Section>
  );
}

export default Carnivore;
