const mongoose = require("mongoose");

const boutiquesSchema = mongoose.Schema(
  {
    titre: { type: String, required: true },
    mot_clé: { type: String, required: true },
    description: { type: String, required: true },
    prix: { type: String, required: true },
    image: { type: String, required: false },
    creatorID: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("boutiques", boutiquesSchema);
