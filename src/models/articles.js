const mongoose = require("mongoose")
const mongoDB = 'mongodb://127.0.0.1:27017';
mongoose.connect(mongoDB, {  useNewUrlParser: true,
    useUnifiedTopology: true   });

const articlesSchema = new mongoose.Schema({
    //artigos postados dos autores
    id: {type: Number},
    title: {type : String},
    author: {type : String},
    citation: {type : String},
    resumen: {type : String},
    introduction: {type : String},
    methods: {type : String},
    results: {type : String},
    keywords: {type : String},
    country: {type : String},
    areas: {type : String},
    languages: {type : String}, 
    periodic: {type : String},
    year: {type : Number},
    linkDOI: {type : String},
    images: {type : String},
    read: {type : Boolean}
},{
    versionKey: false
});

const articlesModel = new mongoose.model("articles", articlesSchema);

module.exports = {
articlesModel,
articlesSchema
}