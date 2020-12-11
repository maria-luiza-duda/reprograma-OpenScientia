const articles = require('../models/articles')

const getallarticles = (req, res) => {
    articles.find(function (err, articles) {
        if (err) {
            res.status(500).send({ message: err.message})
        } else {
            res.status(200).send(articles)
        }
    })
}

const createarticle = (req, res) => {
    let article = new articles(req.body);
    article.save(function(err){
        if (err) {
            res.status(500).send({ message: err.message})
        } else {
            res.status(201).send({message : "Article succesfull added"})
        }  
    })
}

const getbytitle = (req, res) => {
    const parametros = req.query
    articles.find(parametros, function (err, articles) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(articles)
        }
    })
}

const getbyauthor = (req, res) => {
    const parametros = req.query
    articles.find(parametros, function (err, articles) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(articles)
        }
    })
}

const getbykeywords = (req, res) => {
    const parametros = req.query
    articles.find(parametros, function (err, articles) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(articles)
        }
    })
}

const getbyareas = (req, res) => {
    const parametros = req.query
    articles.find(parametros, function (err, articles) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(articles)
        }
    })
}

const getbyyear = (req, res) => {
    const parametros = req.query
    articles.find(parametros, function (err, articles) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(articles)
        }
    })
}

const updatearticle = (req, res) => {
  const id = req.params.id
  articles.updateMany({ id }, { $set : req.body}, { upsert : true }, function (err) {
    if (err) {
        res.status(500).send({ message: err.message })
    } else {
        res.status(200).send({ message: "Article updated succesfuly!"})
    }
  })
}

const updatetitle = (req, res) => {
    const title = req.params.title
    articles.update({ title }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
        res.status(200).send({ message: "Article's title updated succesfuly!"})
      }
    })
  }

const updateauthor = (req, res) => {
    const author = req.params.title
    articles.update({ author }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
        res.status(200).send({ message: "Article's Authors updated succesfuly!"})
      }
    })  
}

const updateresumen = (req, res) => {
    const resumen = req.params.resumen
    articles.update({ resumen }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
        res.status(200).send({ message: "Resumen updated succesfuly!"})
      }
    })
}

const updateresults = (req, res) => {
    const results = req.params.results
    articles.update({ results }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
        res.status(200).send({ message: "Results updated succesfuly!"})  
      }
    })
}

const updatekeywords = (req, res) => {
    const keywords = req.params.keywords
    articles.update({ keywords }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Keywords updated succesfuly!"})
      } 
    })
}

const updateareas = (req, res) => {
    const areas = req.params.areas
    articles.update({ areas }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Areas of study updated succesfuly!"})
      }
    })
}

const updatereadstatus = (req, res) => {
    const read = req.params.id
    articles.update({ read }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Status of read updated succesfuly!"})
      }
    })
}

const deletearticle = (req, res) => {
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
    getallarticles,
    createarticle,
    getbytitle,
    getbyauthor,
    getbykeywords,
    getbyareas,
    getbyyear,
    updatearticle,
    updatetitle,
    updateauthor,
    updateresumen,
    updateresults,
    updatekeywords,
    updateareas,
    updatereadstatus,
    deletearticle,
}