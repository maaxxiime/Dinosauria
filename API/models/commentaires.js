const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentairesSchema = mongoose.Schema(
  {
    texte: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("commentaires", commentairesSchema);
