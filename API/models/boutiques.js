const mongoose = require('mongoose');

const boutiquesSchema = mongoose.Schema(
{
titre : {type : String, required : true},
description : {type : String, required : true},
prix : {type : Boolean, required : true},
image : {type : String, required : false},
adminId : {type : String, required : true}
}, {timestamps : true}
)


module.exports = mongoose.model("boutiques", boutiquesSchema);