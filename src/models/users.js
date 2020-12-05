const mongoose = require("mongoose")
const mongoDB = 'mongodb://127.0.0.1:27017';
mongoose.connect(mongoDB, {  useNewUrlParser: true,
    useUnifiedTopology: true   });

const usersSchema = new mongoose.Schema({
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

const usersModel = new mongoose.model("users", usersSchema);

module.exports = {
usersModel,
usersSchema
}