const mongoose = require("mongoose")
const mongoDB = 'mongodb://127.0.0.1:27017';
mongoose.connect(mongoDB, {  useNewUrlParser: true,
    useUnifiedTopology: true   });

const authorsSchema = new mongoose.Schema({
    //perfil deste autor
    id: {type : Number},
    name: {type : String},
    photo: {type : String},
    citation: {type : String},
    nationality: {type : String},
    gender: {type : String},
    age: {type : Number},
    currentAffiliation: {type : String},
    areas: {type : String},
    currentProject: {type : String},
    email: {type : String},
    lattes: {type : String},
    researchGate: {type : String},
    linkedIn: {type : String},
    following: {type : Boolean},
},{
    versionKey: false
});

const authorsModel = new mongoose.model("authors", authorsSchema);

module.exports = {
authorsModel,
authorsSchema
}