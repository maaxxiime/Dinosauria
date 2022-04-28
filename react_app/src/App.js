import { BrowserRouter, Route, Routes } from "react-router-dom";

// COMPONENTS
import Header from "./components/header/header.js";
import Home from "./components/home/home";
import Signup from "./components/signup/signup.js";
import Login from "./components/login/login.js";
import MonCompte from "./components/compte/compte.js";
import Boutique from "./components/boutique/boutique.js";
import BackOffice from "./components/backoffice/backoffice.js";
import ReadCommentaire from "./components/commentaire/readcommentaire.js";
import PostCommentaire from "./components/commentaire/postcommentaire.js";
import Error from "./components/error/error.js";
import Herbivore from "./components/herbivore/herbivore.js";
import Carnivore from "./components/carnivore/carnivore.js";
import Film from "./components/film/film.js";
import Jardin from "./components/jardin/jardin.js";
import Campement from "./components/campement/campement.js";
import Panier from "./components/panier/panier.js";
import Cgv from "./components/cgv/cgv.js";
import Cookies from "./components/cookies/cookies.js";
import Données from "./components/données/données.js";
import Footer from "./components/footer/footer.js";
import { useEffect } from "react";

function App() {
  function initializePanier() {
    var panier = localStorage.getItem("panier");

    if (!panier) {
      var panier = {
        musée: 0,
        cinéma: 0,
        jardin: 0,
        campement: 0,
      };
      localStorage.setItem("panier", JSON.stringify(panier));
    }
  }

  useEffect(() => {
    initializePanier();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/backoffice" element={<BackOffice />} />
        <Route path="/readcommentaire" element={<ReadCommentaire />} />
        <Route path="/postcommentaire" element={<PostCommentaire />} />
        <Route path="/compte" element={<MonCompte />} />
        <Route path="/herbivore" element={<Herbivore />} />
        <Route path="/carnivore" element={<Carnivore />} />
        <Route path="/film" element={<Film />} />
        <Route path="/jardin" element={<Jardin />} />
        <Route path="/campement" element={<Campement />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/cgv" element={<Cgv />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/données" element={<Données />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
