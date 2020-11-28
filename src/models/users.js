const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    id: {type : Number},
    nameUser: {type : String},
    photo: {type : String},
    naturality: {type : String},
    gender: {type : String},
    age: {type : Number},
    levelOfEducation: {type : String},
    areasOfInterest: {type : String},
    email: {type : String},
    curriculumLattes: {type : String},
    researchGate: {type : String},
    linkedIn: {type : String},
},{
    versionKey: false
});

const users = mongoose.model('users', usersSchema);

module.exports = users;