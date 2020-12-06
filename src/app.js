const express = require("express")
const app = express()

app.use(express.json())

const index = require("./routes/index")
const articles = require("./routes/articlesRoute")
const authors = require("./routes/authorsRoute")

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