const mongoose = require('mongoose');

const commentairesSchema = mongoose.Schema(
{
texte : {type : String, required : true},
userId : {type : String, required : true}
}, {timestamps : true}
)


module.exports = mongoose.model("commentaires", commentairesSchema);