const mongoose = require('mongoose');

const authorsSchema = new mongoose.Schema({
    //perfil deste autor
    id: {type : Number},
    name: {type : String},
    photo: {type : String},
    citationName: {type : String},
    articlesFirstAuthor: {type : String},
    articlesCoAuthor: {type : String},
    nationality: {type : String},
    gender: {type : String},
    age: {type : Number},
    currentAffiliation: {type : String},
    areasOfStudy: {type : String},
    subareasOfStudy: {type : String},
    currentProject: {type : String}, 
    email: {type : String},
    curriculumLattes: {type : String},
    researchGate: {type : String},
    linkedIn: {type : String},
    following: {type : Boolean},
    //artigos deste autor
    idArticle: {type: Number},
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
    linkDOI: {type : String},
    images: {type : String},
    read: {type : Boolean}
},{
    versionKey: false
});

const authors = mongoose.model('authors', authorsSchema);

module.exports = authors;