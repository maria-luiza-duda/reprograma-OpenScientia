const { link } = require('fs');
const mongoose = require('mongoose');

const authorsSchema = new mongoose.Schema({
    id: {type : Number},
    author: {type : String},
    photo: {type : Document},
    citationNameAuthor: {type : String},
    articlesFirstAuthor: {type : String},
    articlesCoAuthor: {type : String},
    naturality: {type : String},
    gender: {type : String},
    age: {type : Number},
    currentAffiliation: {type : String},
    areasOfStudy: {type : String},
    subareasOfStudy: {type : String},
    currentProject: {type : String}, 
    email: {type : String},
    curriculumLattes: {type : link},
    researchGate: {type : link},
    linkedIn: {type : link},
    following: {type : Boolean}
},{
    versionKey: false
});

const authors = mongoose.model('authors', authorsSchema);

module.exports = authors;