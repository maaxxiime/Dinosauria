const Commentaire = require("../models/commentaires.js");
const jwt = require("jsonwebtoken");
const fs = require("fs");

exports.create_commentaire = (req, res, next) => {
  // décodage du token
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
  const userID = decodedToken.userID;

  // enregistre le commentaire ainsi que l'id du token et le joint à creatorID
  const newcommentaire = new Commentaire({
    ...req.body,
    creatorId: userID,
  });

  //sauvegarde newcommentaire
  newcommentaire
    .save()
    .then((createdItem) =>
      res.status(201).json({
        message: "le commentaire vient d'être crée",
        created: createdItem,
      })
    )
    // si erreur => log l'erreur
    .catch((err) => res.status(401).json({ err }));
};

exports.read_all = (req, res, next) => {
  //recherche des produits dans la table commentaires
  Commentaire.find()
    // associe le creatorId au commentaire pour pouvoir afficher le pseudo de l'user dans la page au front-end
    .populate("creatorId")
    // affiche les commentaires du plus vieux au plus récent
    .sort("desc")
    //si il sont trouvé => passe dans le then, sinon dans le catch
    .then((commentaires) =>
      res
        .status(200)
        .json({ message: "voici les commentaires", commentaires: commentaires })
    )
    .catch((err) => res.status(404).json({ err }));
};

exports.read_all_by_userId = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
  const userID = decodedToken.userID;
  // cherche les commentaire dont le creatorId correspond a l'id du token
  Commentaire.find({ creatorId: userID })
    // affiche les commentaire, sinon passe dans le catch et log l'erreur
    .then((commentaires) =>
      res
        .status(200)
        .json({ message: "voici vos commentaires", commentaire: commentaires })
    )
    .catch((err) => res.status(404).json({ err }));
};

// exports.upvote_commentaire = (req, res, next) => {
//   const token = req.headers.authorization.split(" ")[1];
//   const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
//   const userID = decodedToken.userID;
//   const TargetId = req.params.TargetId;
// };

// exports.downvote_commentaire = (req, res, next) => {
//   const token = req.headers.authorization.split(" ")[1];
//   const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
//   const userID = decodedToken.userID;
//   const TargetId = req.params.TargetId;
// };

exports.delete_commentaire = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
  const userID = decodedToken.userID;
  const TargetId = req.params.TargetId;

  // cherche le commentaire qui correspond à l'id de la requette axios
  Commentaire.findById(TargetId)
    .populate("creatorId")
    .then((commentaire) => {
      // si l'id du token correspond à l'id de creatorId du commentaire alors supprime le commentaire
      if (userID == commentaire.creatorId._id) {
        commentaire
          .deleteOne()
          .then((deleted) => {
            res.status(200).json({
              message: `Votre commentaire : ${deleted.texte} est supprimé`,
            });
          })
          // si impossible => log l'erreur
          .catch((err) =>
            res
              .status(404)
              .json({ message: "Impossible de supprimer", error: err })
          );
      } else {
        // si les id ne corresponde pas
        res.status(403).json({
          message: "Vous n'avez pas les droits pour supprmier le commentaire",
        });
      }
    })
    // si le produit n'est pas trouvé dans la base de donnée
    .catch((err) =>
      res.status(404).json({ message: "Commentaire non trouvé", error: err })
    );
};
