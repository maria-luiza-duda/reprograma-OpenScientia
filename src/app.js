const express = require("express")
const app = express()

const index = require("./routes/index")
const articles = require("./routes/articlesRoute")

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

module.exports = app