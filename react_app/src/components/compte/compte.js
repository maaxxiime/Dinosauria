import styled from "styled-components";
import colors from "../variables";
import { useState, useEffect } from "react";
import Btn from "../button";
import axios from "axios";
import { apiurl } from "../variables";
import qs from "qs";

const Section = styled.section`

`;



function Compte() {
    return (
    <Section>
        <h1> Faire un populate dans api pour récuperer commentaire user (comme pour récuperer le pseudo des commentaires) </h1>
    </Section>
    )
}

export default Compte;