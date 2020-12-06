const mongoose = require("mongoose")

const authorsSchema = new mongoose.Schema({
    //perfil deste autor
    id: {type : Number},
    name: {type : String},
    citation: {type : String},
    currentAffiliation: {type : String},
    areas: {type : String},
    currentProject: {type : String},
    email: {type : String},
    password: {type : String},
    following: {type : Boolean},
},{
    versionKey: false
});

const authors = mongoose.model('authors', authorsSchema);

module.exports = authors;
