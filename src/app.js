const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb://localhost:27017/openScientia", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
    console.log("Succesful connection.")
})

const index = require("./routes/index")
const articles = require("./routes/articlesRoute")
const authors = require("./routes/authorsRoute")
const users = require("./routes/usersRoute")

app.use(express.json());
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index)
app.use("/articles", articles)
app.use("/authors", authors)
app.use("/users", users)

module.exports = app