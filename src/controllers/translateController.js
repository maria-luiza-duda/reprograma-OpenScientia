const articles = require("../models/articles")
const authors = require("../models/authors")
const users = require("../models/users")
const fs = require("fs")

//articlesRoutes

//Para retornar todos os artigos
const getAllArticles = (req, res) => {
    console.log(req.url)
    articles.find(function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
     res.status(200).send(articles)  
    })
}

//Para adicionar um novo artigo
const createArticle = (req, res) => {
    console.log(req.body);
    let article = new articles(req.body);
    article.save(function(err){
    if (err) {
        res.status(500).send({ message: err.message})
    }
        res.status(201).send(article())
    })
}

//Para retornar artigos com filtros específicos
const getArticlesByTitle = (req, res) => {
    const title = req.params.title
    articles.find({ title }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getArticlesByAuthor = (req, res) => {
    const author = req.params.author
    articles.find({ author }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getArticlesByCitation = (req, res) => {
    const citationNameAuthor = req.params.citationNameAuthor
    articles.find({ citationNameAuthor }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getArticlesByKeywords = (req, res) => {
    const keywords = req.params.keywords
    articles.find({ keywords }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getArticlesByCountry = (req, res) => {
    const country = req.params.country
    articles.find({ country }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getArticlesByAreas = (req, res) => {
    const areas = req.params.areas
    articles.find({ areas }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getArticlesByLanguage = (req, res) => {
    const languages = req.params.languages
    articles.find({ languages }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getArticlesByPeriodic = (req, res) => {
    const periodic = req.params.periodic
    articles.find({ periodic }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getArticlesByYear = (req, res) => {
    const year = req.params.year
    articles.find({ year }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

//Para atualizar um artigo por parâmetros específicos
const updateArticle = (req, res) => {
  const id = req.params.id
  articles.update({id}, { $set : req.body}, function (err) {
    if (err) {
        res.status(500).send({ message: err.message })
    }
    res.status(200).send({ message: "Article updated succesfuly!"})
  })

}

const updateArticleTitle = (req, res) => {
    const title = req.params.title
    articles.update({ title }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Article's Title updated succesfuly!"})
    })
  
  }

const updateArticleAuthor = (req, res) => {
    const author = req.params.title
    articles.update({ author }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Article's Authors updated succesfuly!"})
    })
  
}

const updateArticleCitation = (req, res) => {
    const citation = req.params.citation
    articles.update({ citation }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Citation Name updated succesfuly!"})
    })
  
}

const updateArticleResumen = (req, res) => {
    const resumen = req.params.resumen
    articles.update({ resumen }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Resumen updated succesfuly!"})
    })
  
}

const updateArticleIntroduction = (req, res) => {
    const introduction = req.params.introduction
    articles.update({ introduction }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Introduction updated succesfuly!"})
    })
  
}

const updateArticleMethods = (req, res) => {
    const methods = req.params.methods
    articles.update({ methods }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Methods updated succesfuly!"})
    })
  
}

const updateArticleResults = (req, res) => {
    const results = req.params.results
    articles.update({ results }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Results updated succesfuly!"})
    })
  
}

const updateArticleKeywords = (req, res) => {
    const keywords = req.params.keywords
    articles.update({ keywords }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Keywords updated succesfuly!"})
    })
  
}

const updateArticleCountry = (req, res) => {
    const country = req.params.country
    articles.update({ country }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Research Country updated succesfuly!"})
    })
  
}

const updateArticleAreas = (req, res) => {
    const areas = req.params.areas
    articles.update({ areas }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Areas of study updated succesfuly!"})
    })
  
}

const updateArticleLanguage = (req, res) => {
    const languages = req.params.languages
    articles.update({ languages }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Languages updated succesfuly!"})
    })
  
}

const updateArticlePeriodic = (req, res) => {
    const periodic = req.params.periodic
    articles.update({ periodic }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Periodic updated succesfuly!"})
    })
  
}

const updateArticleYear = (req, res) => {
    const year = req.params.year
    articles.update({ year }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Year of publication updated succesfuly!"})
    })
  
}

const updateArticleDoi = (req, res) => {
    const linkDOI = req.params.linkDOI
    articles.update({ linkDOI }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Link DOI updated succesfuly!"})
    })
  
}

const updateArticleImages = (req, res) => {
    const images = req.params.images
    articles.update({ images }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Images updated succesfuly!"})
    })
  
}

//Para deletar um registro de artigo
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

//authorsRoutes

//Para retornar todos os perfis de autores
const getAllAuthors = (req, res) => {
    console.log(req.url)
    authors.find(function(err, authors){
    if (err) {
        res.status(500).send({ message: err.message})
    }
     res.status(200).send(authors)  
    })
}

//Para retornar um perfil de autor cadastrado
const getAuthorByID = (req, res) => {
    const id = req.params.id
    authors.find({ id }, function(err, authors){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(authors)    
    })
}

//Para criar novo perfil de autor
const createAuthorProfile = (req, res) => {
    console.log(req.body);
    let author = new authors(req.body);
    author.save(function(err){
    if (err) {
        res.status(500).send({ message: err.message})
    }
        res.status(201).send(author.toJSON())
    })
}

//Para retornar os autores com filtros específicos
const getAuthorsByName = (req, res) => {
    const name = req.params.name
    authors.find({ name }, function(err, authors){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(authors)    
    })
}

const getAuthorsByCitation = (req, res) => {
    const citation = req.params.citation
    authors.find({ citation }, function(err, authors){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(authors)    
    })
}

//Para atualizar o perfil do autor
const updateAuthor = (req, res) => {
    const authors = req.params.authors
    authors.update({ name }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Name updated succesfuly!"})
    })
}

const updateAuthorName = (req, res) => {
    const name = req.params.name
    authors.update({ name }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Name updated succesfuly!"})
    })
}

const updateAuthorPhoto = (req, res) => {
    const photo = req.params.photo
    authors.update({ photo }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Photo updated succesfuly!"})
    })
}

const updateAuthorCitation = (req, res) => {
    const citation = req.params.citation
    authors.update({ citation }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Citation name updated succesfuly!"})
    })
}

const updateAuthorNationality = (req, res) => {
    const nationality = req.params.nationality
    authors.update({ nationality }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Nationality updated succesfuly!"})
    })
}

const updateAuthorGender = (req, res) => {
    const gender = req.params.gender
    authors.update({ gender }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Gender updated succesfuly!"})
    })
}

const updateAuthorAge = (req, res) => {
    const age = req.params.age
    authors.update({ age }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Age updated succesfuly!"})
    })
}

const updateAuthorAffiliation = (req, res) => {
    const currentAffiliation = req.params.currentAffiliation
    authors.update({ currentAffiliation }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Current affiliation updated succesfuly!"})
    })
}

const updateAuthorAreas = (req, res) => {
    const areas = req.params.areas
    authors.update({ areas }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Areas of interest updated succesfuly!"})
    })
}

const updateAuthorProject = (req, res) => {
    const currentProject = req.params.currentProject
    authors.update({ currentProject }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Current project updated succesfuly!"})
    })
}

const updateAuthorEmail = (req, res) => {
    const email = req.params.email
    authors.update({ email }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Email updated succesfuly!"})
    })
}

const updateAuthorLattes = (req, res) => {
    const lattes = req.params.lattes
    authors.update({ lattes }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Curriculum Lattes updated succesfuly!"})
    })
}

const updateAuthorGate = (req, res) => {
    const researchGate = req.params.researchGate
    authors.update({ researchGate }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Research Gate updated succesfuly!"})
    })
}

const updateAuthorLinkedin = (req, res) => {
    const linkedin = req.params.linkedin
    authors.update({ linkedin }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Linkedin updated succesfuly!"})
    })
}

//Para atualizar o status de "follow" dos cientistas
const updateFollowingStatus = (req, res) => {
    const following = req.params.following
    articles.update({ following }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Following status updated succesfuly!"})
    })
}

//Para atualizar o status de lido
const updateReadStatus = (req, res) => {
    const read = req.params.id
    articles.update({ read }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Status of read updated succesfuly!"})
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

//usersRoutes

//Para retornar todos os perfis de usuários
const getAllUsers = (req, res) => {
    console.log(req.url)
    users.find(function(err, users){
    if (err) {
        res.status(500).send({ message: err.message})
    }
     res.status(200).send(users)  
    })
}

//Para retornar um perfil de usuário cadastrado
const getUserByID = (req, res) => {
    const id = req.params.id
    users.find({ id }, function(err, users){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(users)    
    })
}

const getUserByName = (req, res) => {
    const name = req.params.name
    users.find({ name }, function(err, users){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(users)    
    })
}

//Para criar novo perfil de autor
const createProfileUser = (req, res) => {
    console.log(req.body);
    let user = new users(req.body);
    user.save(function(err){
    if (err) {
        res.status(500).send({ message: err.message})
    }
        res.status(201).send(user.toJSON())
    })
}

//Para atualizar os usuários com parâmetros específicos
const updateUser = (req, res) => {
    const user = req.params.user
    users.update({ name }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "User's name updated succesfuly!"})
    })
}

const updateUserName = (req, res) => {
    const name = req.params.name
    users.update({ name }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "User's name updated succesfuly!"})
    })
}

const updateUserPhoto = (req, res) => {
    const photo = req.params.photo
    users.update({ photo }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "User's photo updated succesfuly!"})
    })
}

const updateUserNaturality = (req, res) => {
    const naturality = req.params.naturality
    users.update({ naturality }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "User's naturality updated succesfuly!"})
    })
}

const updateUserGender = (req, res) => {
    const gender = req.params.gender
    users.update({ gender }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "User's gender updated succesfuly!"})
    })
}

const updateUserAge = (req, res) => {
    const age = req.params.age
    users.update({ age }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "User's age updated succesfuly!"})
    })
}

const updateUserEducation = (req, res) => {
    const levelOfEducation = req.params.levelOfEducation
    users.update({ levelOfEducation }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Level of education updated succesfuly!"})
    })
}

const updateUserInterest = (req, res) => {
    const areas = req.params.areas
    users.update({ areas }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Areas of study updated succesfuly!"})
    })
}

const updateUserEmail = (req, res) => {
    const email = req.params.email
    users.update({ email }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Email updated succesfuly!"})
    })
}

const updateUserPassword = (req, res) => {
    const password = req.params.password
    users.update({ password }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Password updated succesfuly!"})
    })
}

const deleteUserProfile = (req, res) => {
    const id = req.params.id
        users.find({ id }, function(err, users){
        if(users.length > 0){
            users.deleteMany({ id }, function(err){
                if (err) {
                    res.status(500).send({ 
                    message: err.message,
                    status: "Fail"
                    })
                }
                res.status(200).send({ 
                    message: 'User profile deleted succesful!',
                    status: "Succesful"
                })
            })  
        } else {  
            res.status(200).send({
                message: 'User not found to be deleted',
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
    getArticlesByCitation,
    getArticlesByKeywords,
    getArticlesByCountry,
    getArticlesByAreas,
    getArticlesByLanguage,
    getArticlesByPeriodic,
    getArticlesByYear,
    updateArticle,
    updateArticleTitle,
    updateArticleAuthor,
    updateArticleCitation,
    updateArticleResumen,
    updateArticleIntroduction,
    updateArticleMethods,
    updateArticleResults,
    updateArticleKeywords,
    updateArticleCountry,
    updateArticleAreas,
    updateArticleLanguage,
    updateArticlePeriodic,
    updateArticleYear,
    updateArticleDoi,
    updateArticleImages,
    deleteArticle,
    getAllAuthors,
    getAuthorByID,
    createAuthorProfile,
    getAuthorsByName,
    getAuthorsByCitation,
    updateAuthor,
    updateAuthorName,
    updateAuthorPhoto,
    updateAuthorCitation,
    updateAuthorNationality,
    updateAuthorGender,
    updateAuthorAge,
    updateAuthorAffiliation,
    updateAuthorAreas,
    updateAuthorProject,
    updateAuthorEmail,
    updateAuthorLattes,
    updateAuthorGate,
    updateAuthorLinkedin,
    updateFollowingStatus,
    updateReadStatus,
    deleteAuthor,
    getAllUsers,
    getUserByID,
    getUserByName,
    createProfileUser,
    updateUser,
    updateUserName,
    updateUserPhoto,
    updateUserNaturality,
    updateUserGender,
    updateUserAge,
    updateUserEducation,
    updateUserInterest,
    updateUserEmail,
    updateUserPassword,
    deleteUserProfile
}