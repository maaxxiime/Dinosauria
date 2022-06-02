export const apiurl = "http://localhost:8000/api";

// pattern des couleurs qui sont utilisé pour l'app pour que ça soit entretenable dans le temps
const colors = {
  background_black: "#2A2525",
  background_white: "#FFFFFF",
  btn_blue: "#1453BE",
  txt_white: "#FFFFFF",
  txt_black: "#2A2525",
  btn_gradient: "207deg, rgba(235,72,40,1) 30%, rgba(255,170,0,1) 70%",
  btn_red: "#9e1717",
  btn_redhover: "#d51414",
  add_panier: "#79d352",
};

// fonction qui calcule le total du panier
export const updateTotal = () => {
  let panier = JSON.parse(localStorage.getItem("panier"));

  if (panier) {
    let t = 0;

    for (const i in panier.items) {
      t += panier.items[i].qte * panier.items[i].prix;
    }

    console.log(t);
    panier.total = t;

    localStorage.setItem("panier", JSON.stringify(panier));

    return t;
    
  }
};

// fonction qui calcule le total des produit du panier
export const totalTicket = () => {
  let panier = JSON.parse(localStorage.getItem("panier"));

  if (panier) {
    let t = 0;

    for (const i in panier.items) {
      t += panier.items[i].qte;
    }

    localStorage.setItem("panier", JSON.stringify(panier));

    return t;
  }
};

export default colors;
