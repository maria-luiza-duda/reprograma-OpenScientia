const mongoose = require("mongoose")

const articlesSchema = new mongoose.Schema({
    //artigos postados dos autores
    id: {type: Number},
    title: {type : String},
    author: {type : String},
    resumen: {type : String},
    results: {type : String},
    keywords: {type : String},
    areas: {type : String},
    year: {type : Number},
    read: {type : Boolean}
},{
    versionKey: false
});

const articles = mongoose.model('articles', articlesSchema);

module.exports = articles;
