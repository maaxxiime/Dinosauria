import LoadImage from "../img-loader/loader";
import styled from "styled-components";
import colors from "../variables";

//images
import ImgHerbivore1 from "../../assets/img/salles_herbivores1_ccexpress.jpeg"
import ImgHerbivore2 from "../../assets/img/salles_herbivores2_ccexpress.jpeg"
import ImgHerbivore3 from "../../assets/img/salles_herbivores3_ccexpress.jpeg"
import ImgHerbivore4 from "../../assets/img/salles_herbivores4_ccexpress.jpeg"

const DivImg1 = styled.div`
width: 500px;
height: 350px;
`;

function Herbivore() {
    return (
    <section>
    <DivImg1>
    <LoadImage smallImgSrc={ImgHerbivore1} largeImgSrc={ImgHerbivore2} />
    </DivImg1>
    </section>

    )
}

export default Herbivore;
