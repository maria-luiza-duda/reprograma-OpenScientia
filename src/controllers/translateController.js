const articles = require('../models/articles')
const authors = require('../models/authors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

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
        articles.find({ id }, function(err, articles){
        if(articles.length > 0){
            articles.deleteMany({ id }, function(err){
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

const getAllAuthors = (req, res) => {
    console.log(req.url)
    authors.find(function(err, authors){
        if (err) {
            res.status(500).send({ message: err.message})
        } else {
            res.status(200).send(authors) 
        }  
    })
}

const createPassword = (req, res) => {
    const password = bcrypt.hashSync(req.body.password, 10);
  req.body.password = password;
  const authors = new authors(req.body);
  authors.save(function(err) {
    if (err) {
      res.status(500).send({ message: err.message })
    } else {
      res.status(201).send(author.toJSON())  
    }
  })
}

const login = (req, res) => {
    authors.findOne({ email: req.body.email }, function(error, author) {
      if (!author) {
        return res.status(404).send(`There is no author with this email ${req.body.email}`);
      }
  
      const rightPassword = bcrypt.compareSync(req.body.password, author.password);
  
      if (!rightPassword) {
        return res.status(403).send('Incorrect password!');
      }
  
      const token = jwt.sign({ email: req.body.email }, SECRET);
  
      return res.status(200).send(token);
    });
  }

const getAuthorsByName = (req, res) => {
    const parametros = req.query
    authors.find(parametros, function (err, authors) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(authors)
        }
    })
}

const getAuthorsByCitation = (req, res) => {
    const parametros = req.query
    authors.find(parametros, function (err, authors) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(authors)
        }
    })
}

const updateAuthor = (req, res) => {
    const id = req.params.id
    authors.updateMany({ id }, { $set : req.body}, { upsert : true }, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Author updated succesfuly!"})
      }
    })
}

const updateAuthorName = (req, res) => {
    const name = req.params.name
    authors.update({ name }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message: "Name updated succesfuly!"})
        }
    })
}

const updateAuthorCitation = (req, res) => {
    const citation = req.params.citation
    authors.update({ citation }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
             res.status(200).send({ message: "Citation name updated succesfuly!"})
        }
    })
}

const updateAuthorAffiliation = (req, res) => {
    const currentAffiliation = req.params.currentAffiliation
    authors.update({ currentAffiliation }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message: "Current affiliation updated succesfuly!"})
        }
    })
}

const updateAuthorAreas = (req, res) => {
    const areas = req.params.areas
    authors.update({ areas }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message: "Areas of interest updated succesfuly!"})
        }
    })
}

const updateAuthorProject = (req, res) => {
    const currentProject = req.params.currentProject
    authors.update({ currentProject }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message: "Current project updated succesfuly!"})
        }
    })
}

const updateFollowingStatus = (req, res) => {
    const following = req.params.following
    authors.update({ following }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Following status updated succesfuly!"})
      }
    })
}

const deleteAuthor = (req, res) => {
    const id = req.params.id
        authors.find({ id }, function(err, authors){
        if(authors.length > 0){
            authors.deleteMany({ id }, function(err){
                if (err) {
                    res.status(500).send({ 
                    message: err.message,
                    status: "Fail"
                    })
                }
                res.status(200).send({ 
                    message: 'Author profile deleted succesful!',
                    status: "Succesful"
                })
            })  
        } else {  
            res.status(200).send({
                message: 'Author not found to be deleted',
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
    deleteArticle,
    getAllAuthors,
    createPassword,
    login,
    getAuthorsByName,
    getAuthorsByCitation,
    updateAuthor,
    updateAuthorName,
    updateAuthorCitation,
    updateAuthorAffiliation,
    updateAuthorAreas,
    updateAuthorProject,
    updateFollowingStatus,
    updateReadStatus,
    deleteAuthor
}