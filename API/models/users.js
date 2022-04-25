const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const commentaires = require("./commentaires.js");

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    identifiant: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean, required: false, default: false },
    commentaires: [{ type: Schema.Types.ObjectId, ref: "commentaires" }],
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
