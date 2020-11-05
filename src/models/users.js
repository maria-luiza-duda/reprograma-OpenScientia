const { link } = require('fs');
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    id: {type : Number},
    name: {type : String},
    photo: {type : Document},
    naturality: {type : String},
    gender: {type : String},
    age: {type : Number},
    levelOfEducation: {type : String},
    areasOfInterest: {type : String},
    email: {type : String},
    curriculumLattes: {type : link},
    researchGate: {type : link},
    linkedIn: {type : link},
},{
    versionKey: false
});

const users = mongoose.model('users', usersSchema);

module.exports = users;