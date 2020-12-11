require('dotenv-safe').config();

const express = require("express")
const mongoose = require('mongoose');

const app = express()

mongoose.connect(`${process.env.MONGODB_URL}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", () => console.log("Succesful connection"))

const index = require("./routes/index")
const articles = require("./routes/articlesRoute")
const authors = require("./routes/authorsRoute")

app.use(express.json())

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

module.exports = app