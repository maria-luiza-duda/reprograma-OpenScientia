const mongoose = require('mongoose');

const authorsSchema = new mongoose.Schema({
    id: {type : Number},
    author: {type : String},
    photo: {type : String},
    citationNameAuthor: {type : String},
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
    following: {type : Boolean}
},{
    versionKey: false
});

const authors = mongoose.model('authors', authorsSchema);

module.exports = authors;