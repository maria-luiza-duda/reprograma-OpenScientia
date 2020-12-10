const articles = require('../models/articles')

const getAllArticles = (req, res) => {
    articles.find(function (err, articles) {
        if (err) {
            res.status(500).send({ message: err.message})
        } else {
            res.status(200).send(articles)
        }
    })
}

const createArticle = (req, res) => {
    let article = new articles(req.body);
    article.save(function(err){
        if (err) {
            res.status(500).send({ message: err.message})
        } else {
            res.status(201).send({message : "Article succesfull added"})
        }  
    })
}

const getArticlesByTitle = (req, res) => {
    const parametros = req.query
    articles.find(parametros, function (err, articles) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(articles)
        }
    })
}

const getArticlesByAuthor = (req, res) => {
    const parametros = req.query
    articles.find(parametros, function (err, articles) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(articles)
        }
    })
}

const getArticlesByKeywords = (req, res) => {
    const parametros = req.query
    articles.find(parametros, function (err, articles) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(articles)
        }
    })
}

const getArticlesByAreas = (req, res) => {
    const parametros = req.query
    articles.find(parametros, function (err, articles) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(articles)
        }
    })
}

const getArticlesByYear = (req, res) => {
    const parametros = req.query
    articles.find(parametros, function (err, articles) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(articles)
        }
    })
}

const updateArticle = (req, res) => {
  const id = req.params.id
  articles.updateMany({ id }, { $set : req.body}, { upsert : true }, function (err) {
    if (err) {
        res.status(500).send({ message: err.message })
    } else {
        res.status(200).send({ message: "Article updated succesfuly!"})
    }
  })
}

const updateArticleTitle = (req, res) => {
    const title = req.params.title
    articles.update({ title }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
        res.status(200).send({ message: "Article's title updated succesfuly!"})
      }
    })
  }

const updateArticleAuthor = (req, res) => {
    const author = req.params.title
    articles.update({ author }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
        res.status(200).send({ message: "Article's Authors updated succesfuly!"})
      }
    })  
}

const updateArticleResumen = (req, res) => {
    const resumen = req.params.resumen
    articles.update({ resumen }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
        res.status(200).send({ message: "Resumen updated succesfuly!"})
      }
    })
}

const updateArticleResults = (req, res) => {
    const results = req.params.results
    articles.update({ results }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
        res.status(200).send({ message: "Results updated succesfuly!"})  
      }
    })
}

const updateArticleKeywords = (req, res) => {
    const keywords = req.params.keywords
    articles.update({ keywords }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Keywords updated succesfuly!"})
      } 
    })
}

const updateArticleAreas = (req, res) => {
    const areas = req.params.areas
    articles.update({ areas }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Areas of study updated succesfuly!"})
      }
    })
}

const updateReadStatus = (req, res) => {
    const read = req.params.id
    articles.update({ read }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Status of read updated succesfuly!"})
      }
    })
}

const deleteArticle = (req, res) => {
    const id = req.params.id
        articles.find({ id }, function(err, article){
        if(article.length > 0){
            articles.deleteOne({ id }, function(err){
                if (err) {
                    res.status(500).send({ 
                    message: err.message,
                    status: "Fail"
                    })
                }
                res.status(200).send({ 
                    message: 'Article deleted succesful!',
                    status: "Succesful"
                })
            })  
        } else {  
            res.status(200).send({
                message: 'There is no article to be deleted',
                status: "Empty"
            })
        }
    })   
}

module.exports = {
    getAllArticles,
    createArticle,
    getArticlesByTitle,
    getArticlesByAuthor,
    getArticlesByKeywords,
    getArticlesByAreas,
    getArticlesByYear,
    updateArticle,
    updateArticleTitle,
    updateArticleAuthor,
    updateArticleResumen,
    updateArticleResults,
    updateArticleKeywords,
    updateArticleAreas,
    updateReadStatus,
    deleteArticle,
}