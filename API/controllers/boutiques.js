const jwt = require("jsonwebtoken");
const Boutique = require("../models/boutiques.js");
const fs = require("fs");

exports.create_product = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
  const userID = decodedToken.userID;

  const newproduct = req.file
    ? new Boutique({
        ...req.body,
        creatorID: userID,
        image: `${req.protocol}://${req.get("host")}/public/${
          req.file.filename
        }`,
      })
    : new Boutique({
        ...req.body,
        creatorID: userID,
      });

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
  Boutique.find()
    .then((product) =>
      res.status(200).json({ message: "voici vos produits", product: product })
    )
    .catch((err) => res.status(404).json({ err }));
};

exports.update_product = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
  const userID = decodedToken.userID;
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

  Boutique.findById(TargetId)
    .then((product) => {
      if (userID === product.creatorID) {
        if (product.image) {
          const filename = product.image.split("/public/")[1];
          fs.unlink(`./public/${filename}`, (err) => {
            if (err) {
              res.status(400).json({ message: "unlink Error", error: err });
            }
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
        res.status(403).json({
          message: `Vous n'avez pas les droits : CreatorID : ${product.creatorID}, userId : ${userID}`,
        });
      }
    })
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
          .deleteOne()
          .then((deleted) => {
            res.status(200).json({
              message: `Votre produit : ${deleted.titre} est supprimé`,
            });
          })
          .catch((err) =>
            res
              .status(404)
              .json({ message: "Impossible de supprimer", error: err })
          );
      } else {
        res.status(403).json({
          message: "Vous n'avez pas les droits pour supprimer le produit",
        });
      }
    })
    .catch((err) =>
      res.status(404).json({ message: "Produit non trouvé", error: err })
    );
};
