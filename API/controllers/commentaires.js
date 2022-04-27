const Commentaire = require("../models/commentaires.js");
const jwt = require("jsonwebtoken");
const fs = require("fs");

exports.create_commentaire = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
  const userID = decodedToken.userID;

  const newcommentaire = new Commentaire({
    ...req.body,
    creatorId: userID,
  });

  newcommentaire
    .save()
    .then((createdItem) =>
      res.status(201).json({
        message: "le commentaire vient d'être crée",
        created: createdItem,
      })
    )
    .catch((err) => res.status(401).json({ err }));
};

exports.read_all = (req, res, next) => {
  Commentaire.find()
    .populate('creatorId')
    .sort("desc")
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

  Commentaire.find({ creatorId: userID })
    .then((commentaires) =>
      res.status(200).json({ message: "voici vos commentaires", commentaire: commentaires })
    )
    .catch((err) => res.status(404).json({ err }));
};





exports.upvote_commentaire = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
  const userID = decodedToken.userID;
  const TargetId = req.params.TargetId;
};

exports.downvote_commentaire = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
  const userID = decodedToken.userID;
  const TargetId = req.params.TargetId;
};

exports.delete_commentaire = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
  const userID = decodedToken.userID;
  const TargetId = req.params.TargetId;

  Commentaire.findById(TargetId)
    .then((commentaire) => {
      if (userID === commentaire.creatorId) {
        commentaire
          .deleteOne()
          .then((deleted) => {
            res.status(200).json({
              message: `Votre commentaire : ${deleted.texte} est supprimé`,
            });
          })
          .catch((err) =>
            res
              .status(404)
              .json({ message: "Impossible de supprimer", error: err })
          );
      } else {
        res.status(403).json({
          message: "Vous n'avez pas les droits pour supprmier le commentaire",
        });
      }
    })
    .catch((err) =>
      res.status(404).json({ message: "Commentaire non trouvé", error: err })
    );
};
