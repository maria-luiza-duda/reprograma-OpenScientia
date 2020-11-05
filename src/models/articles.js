const { link } = require('fs');
const mongoose = require('mongoose');

const articlesSchema = new mongoose.Schema({
    id: {type : Number},
    title: {type : String},
    author: {type : String},
    citationNameAuthor: {type : String},
    resumen: {type : String},
    introduction: {type : String},
    methods: {type : String},
    results: {type : String},
    keywords: {type : String},
    researchCountry: {type : String},
    areasOfStudy: {type : String},
    subareasOfStudy: {type : String},
    languages: {type : String}, 
    periodicOfArticle: {type : String},
    yearOfPublication: {type : Number},
    linkDOI: {type : link},
    read: {type : Boolean}
},{
    versionKey: false
});

const articles = mongoose.model('articles', articlesSchema);

module.exports = articles;