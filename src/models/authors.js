const mongoose = require('mongoose');
//const { articles } = require('./articles')
const Schema = mongoose.Schema;

const authorsSchema = new Schema({
    //perfil deste autor
    id: {type : Number},
    name: {type : String},
    photo: {type : String},
    citation: {type : String},
    nationality: {type : String},
    gender: {type : String},
    age: {type : Number},
    currentAffiliation: {type : String},
    areasOfStudy: {type : String},
    currentProject: {type : String}, 
    articles: [{type: Schema.Types.ObjectId, ref: 'articles'}],
    email: {type : String},
    curriculumLattes: {type : String},
    researchGate: {type : String},
    linkedIn: {type : String},
    following: {type : Boolean},
},{
    versionKey: false
});

const authors = mongoose.model('authors', authorsSchema);

module.exports = authors, articles;