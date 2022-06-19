import styled from "styled-components";
import colors from "../variables";
import Btn from "../button";

const MainSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

& h1 {
    margin: 2rem 0;
    width: 80%;
    text-align: center;
}

& p {
    width: 80%;
    max-width: 600px;
    text-align: center;
    margin: 2rem 0;
    font-size: 1rem;
    font-weight: 500;
}
`;

function Error() {
    return (
        <MainSection>
            <h1> Page introuvable </h1>
            <p> Oups, il semblerait que vous essayez de naviguer sur une page qui n'existe pas ! </p>
            <Btn
          link={"/"}
          disabled={false}
          bg={colors.background_black}
          textcolor={colors.txt_white}
          bd={colors.background_black}
          bdhover={colors.btn_blue}
          bghover={colors.btn_blue}
          text="Accueil"
        />
        </MainSection>

    )
}

export default Error;