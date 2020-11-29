const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    id: {type : Number},
    name: {type : String},
    photo: {type : String},
    naturality: {type : String},
    gender: {type : String},
    age: {type : Number},
    levelOfEducation: {type : String},
    areas: {type : String},
    email: {type : String},
    password: {type : String}
},{
    versionKey: false
});

const users = mongoose.model('users', usersSchema);

module.exports = users;