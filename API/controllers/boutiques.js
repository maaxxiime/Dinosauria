const jwt = require("jsonwebtoken");
const Boutique = require("../models/boutiques.js");
const fs = require("fs");

exports.create_product = (req, res, next) => {
  // décodage du token
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
  const userID = decodedToken.userID;

  //opérateur ternaire selon si req.file comprend une image ou non
  const newproduct = req.file
    ? new Boutique({
        ...req.body,
        // enregistre l'userID du token dans creatorID
        creatorID: userID,
        image: `${req.protocol}://${req.get("host")}/public/${
          req.file.filename
        }`,
      })
    : new Boutique({
        ...req.body,
        creatorID: userID,
      });

  // Sauvegarde de new product
  newproduct
    .save()
    .then((createdItem) =>
      res
        .status(201)
        .json({ message: "Le produit a été ajouté", created: createdItem })
    )
    .catch((err) => res.status(401).json({ err }));
};

exports.read_all = (req, res, next) => {
  //recherche des produits dans la table boutiques
  Boutique.find()
    //si il sont trouvé => passe dans le then, sinon dans le catch
    .then((product) =>
      res.status(200).json({ message: "voici vos produits", product: product })
    )
    .catch((err) => res.status(404).json({ err }));
};

exports.update_product = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
  const userID = decodedToken.userID;
  // id du produit qui est envoyé dans la requette axios
  const TargetId = req.params.TargetId;

  const newproduct = req.file
    ? {
        ...req.body,
        image: `${req.protocol}://${req.get("host")}/public/${
          req.file.filename
        }`,
      }
    : {
        ...req.body,
      };

  // recherche du produit via l'id envoyé dans la requette axios
  Boutique.findById(TargetId)
    .then((product) => {
      // compare l'userID et le creatorID du produit
      if (userID === product.creatorID) {
        if (product.image) {
          const filename = product.image.split("/public/")[1];
          fs.unlink(`./public/${filename}`, (err) => {
            if (err) {
              res.status(400).json({ message: "unlink Error", error: err });
            }
            //sauvegarde le nouveau produit si il contient une image
            product
              .updateOne(newproduct)
              .then(() =>
                res
                  .status(201)
                  .json({ message: `Produit mis à jour`, product: newproduct })
              )
              .catch((err) => res.status(404).json({ err }));
          });
        } else {
          //sauvegarde ici si il ne contient pas d'image
          product
            .updateOne(newproduct)
            .then(() =>
              res
                .status(201)
                .json({ message: `Produit mis à jour`, product: newproduct })
            )
            .catch((err) => res.status(404).json({ err }));
        }
      } else {
        // si le creatodID et l'id du token ne corresponde pas alors la modification est refusé
        res.status(403).json({
          message: `Vous n'avez pas les droits : CreatorID : ${product.creatorID}, userId : ${userID}`,
        });
      }
    })
    //si le produit n'est pas trouvé
    .catch((err) =>
      res.status(404).json({ message: "Produit non trouvé", error: err })
    );
};

exports.delete_product = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
  const userID = decodedToken.userID;
  const TargetId = req.params.TargetId;

  Boutique.findById(TargetId)
    .then((product) => {
      if (userID === product.creatorID) {
        product

          //supprime le produit si il est trouvé et si l'id du token est identique à celui du creatorID
          .deleteOne()
          .then((deleted) => {
            res.status(200).json({
              message: `Votre produit : ${deleted.titre} est supprimé`,
            });
          })
          // si impossoble de le supprimer => log l'erreur
          .catch((err) =>
            res
              .status(404)
              .json({ message: "Impossible de supprimer", error: err })
          );
      } else {
        // si les id ne corresponde pas
        res.status(403).json({
          message: "Vous n'avez pas les droits pour supprimer le produit",
        });
      }
    })
    // si le produit n'est pas trouvé dans la base de donnée
    .catch((err) =>
      res.status(404).json({ message: "Produit non trouvé", error: err })
    );
};
