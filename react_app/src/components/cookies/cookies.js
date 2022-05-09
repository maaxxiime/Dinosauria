import styled from "styled-components";
import colors from "../variables";

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${colors.txt_black};

  & h1 {
    width: 30%;
    margin: 2rem 0;
  }

  & p {
    width: 60%;
    margin: 0 0 2rem 0;
  }
`;

function Cookies() {
  return (
    <MainSection>
      <h1> Cookies </h1>
      <p>
        {" "}
        Nous utilisons des cookies et des outils similaires (collectivement
        désignés « cookies ») pour les finalités décrites ci-dessous. Cookies
        opérationnels : Nous utilisons des cookies pour fournir nos services
        pour par exemple : Vous reconnaître lorsque vous vous connectez pour
        utiliser nos services. Vous reconnaître en tant que membre Prime et vous
        proposer d’autres fonctionnalités et services personnalisés. Afficher
        des fonctionnalités, des produits et des services qui pourraient vous
        intéresser et qui comprennent les publicités relatives à nos services si
        elles portent sur des produits et services disponibles sur Dinosauria.
        Conserver le suivi des éléments enregistrés dans votre panier. Prévenir
        les activités frauduleuses. Améliorer la sécurité. Assurer le suivi de
        vos préférences, comme celles sur la devise et la langue. Nous utilisons
        également des cookies pour comprendre comment les clients utilisent nos
        services afin de pouvoir apporter des améliorations. Par exemple, nous
        utilisons des cookies pour faire des recherches et établir les
        diagnostics permettant d’améliorer le contenu, les produits et les
        services d’Dinosauria et pour mesurer et comprendre les performances de nos
        services. Cookies publicitaires : nous utilisons également des cookies
        pour présenter certains types de publicités, y compris pour des produits
        et services qui ne sont pas disponibles sur Dinosauria, et pour certaines
        publicités pertinentes par rapport à vos centres d’intérêt. Des tiers
        approuvés peuvent également déposer des cookies lorsque vous utilisez
        les services Dinosauria. Ces tiers incluent les moteurs de recherche, les
        prestataires de services de mesures et d’analyses, les réseaux sociaux
        et les sociétés publicitaires. Les tiers utilisent des cookies
        lorsqu’ils livrent un contenu, qui inclut des publicités correspondant à
        vos centres d’intérêt, pour mesurer l’efficacité de leurs publicités et
        pour fournir des services au nom d’Dinosauria. Pour en savoir plus sur la
        façon dont Dinosauria présente des publicités basées sur les centres
        d’intérêt, consultez l’avis relatif aux Publicités basées sur les
        Centres d’Intérêt. Pour modifier vos préférences sur les publicités
        basées sur les centres d’intérêt, rendez-vous sur la page concernant les
        Préférences publicitaires. Vous pouvez voir les tiers approuvés qui
        utilisent des cookies et gérer la manière dont ils les utilisent, en
        consultant notre page Préférences sur les Cookies. Informations
        supplémentaires Les cookies opérationnels demeureront sur votre
        navigateur pendant 13 mois suivants votre dernière consultation de nos
        services, sauf les cookies utilisés afin de mémoriser vos préférences
        relatives aux informations personnelles (telles vos Préférences
        publicitaires), qui peuvent demeurer sur votre navigateur jusqu’à 5 ans.
        D’autres cookies demeurent sur votre navigateur pendant les 13 mois
        suivants le moment où vous nous indiquez consentir à leur utilisation.
        Vous pouvez gérer les cookies en consultant notre page Préférences sur
        les cookies. Nous appliquerons vos préférences en matière de cookies
        dans le cadre du service Dinosauria sur le navigateur depuis lequel vous
        avez effectué votre choix et tout autre navigateur depuis lequel vous
        êtes connecté. Si vous n’êtes pas connecté, nous pouvons avoir à vous
        redemander vos choix. Alternativement, les paramètres de votre
        navigateur vous indiqueront comme empêcher votre navigateur d’accepter
        de nouveaux cookies, comment obtenir un message lorsque vous recevez un
        nouveau cookie, comment désactiver et supprimer des cookies, et quand
        vos cookies expireront. Les cookies opérationnels vous permettront de
        bénéficier de certaines fonctionnalités essentielles d’Dinosauria. Si vous
        bloquez ou refusez les cookies opérationnels dans les paramètres de
        votre navigateur, certaines fonctionnalités et certains services peuvent
        ne pas fonctionner. Par exemple, vous ne serez pas en mesure d’ajouter
        des articles à votre panier, de passer votre commande ou d’utiliser les
        services Dinosauria qui nécessitent que vous soyez connecté à votre compte.
        Il se peut que vous soyez obligé d’ajuster vos préférences manuellement
        à chaque fois que vous consultez l’un de nos services.{" "}
      </p>
    </MainSection>
  );
}

export default Cookies;
