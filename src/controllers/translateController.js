const articles = require('../models/articles')
const authors = require('../models/authors')

/*const getAllArticles = (req, res) => {
    console.log(req.url)
    articles.find(function (err, articles) {
        if (err) {
            res.status(500).send({ message: err.message})
        } else {
            res.status(200).send(articles)
        }
    })
}*/

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

const updateArticleCountry = (req, res) => {
    const country = req.params.country
    articles.update({ country }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Research Country updated succesfuly!"})
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

const updateArticleLanguage = (req, res) => {
    const languages = req.params.languages
    articles.update({ languages }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Languages updated succesfuly!"})
      } 
    })
}

const updateArticleYear = (req, res) => {
    const year = req.params.year
    articles.update({ year }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Year of publication updated succesfuly!"})
      } 
    })
}

const updateArticleDoi = (req, res) => {
    const linkDOI = req.params.linkDOI
    articles.update({ linkDOI }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Link DOI updated succesfuly!"})
      }
    })
}

const updateArticleImages = (req, res) => {
    const images = req.params.images
    articles.update({ images }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Images updated succesfuly!"})
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

const createAuthorProfile = (req, res) => {
    let author = new authors(req.body);
    author.save(function(err){
        if (err) {
            res.status(500).send({ message: err.message})
        } else {
            res.status(201).send({ message : "Author profile succesfull added"})
        }
    })
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

const updateAuthorNationality = (req, res) => {
    const nationality = req.params.nationality
    authors.update({ nationality }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message: "Nationality updated succesfuly!"})
        }
    })
}

const updateAuthorGender = (req, res) => {
    const gender = req.params.gender
    authors.update({ gender }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message: "Gender updated succesfuly!"})
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

const updateAuthorEmail = (req, res) => {
    const email = req.params.email
    authors.update({ email }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message: "Email updated succesfuly!"})
        }
    })
}

const updateAuthorPassword = (req, res) => {
    const password = req.params.password
    authors.update({ email }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message: "Email updated succesfuly!"})
        }
    })
}

const updateAuthorLattes = (req, res) => {
    const lattes = req.params.lattes
    authors.update({ lattes }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message: "Curriculum Lattes updated succesfuly!"})
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
    //getAllArticles,
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
    updateArticleCountry,
    updateArticleAreas,
    updateArticleLanguage,
    updateArticleYear,
    updateArticleDoi,
    updateArticleImages,
    deleteArticle,
    getAllAuthors,
    createAuthorProfile,
    getAuthorsByName,
    getAuthorsByCitation,
    updateAuthor,
    updateAuthorName,
    updateAuthorCitation,
    updateAuthorNationality,
    updateAuthorGender,
    updateAuthorAffiliation,
    updateAuthorAreas,
    updateAuthorProject,
    updateAuthorEmail,
    updateAuthorPassword,
    updateAuthorLattes,
    updateFollowingStatus,
    updateReadStatus,
    deleteAuthor
}