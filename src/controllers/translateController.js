const secret = process.env.SECRET
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

const getArticlesByAuthors = (req, res) => {
    const articleTitle = req.params.title
    articles.find({ title }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getByAuthorArticles = (req, res) => {
    const articleAuthor = req.params.author
    articles.find({ author }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getByCitationArticles = (req, res) => {
    const articleCitation = req.params.citationNameAuthor
    articles.find({ citationNameAuthor }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getByKeywordsArticles = (req, res) => {
    const articleKeywords = req.params.keywords
    articles.find({ keywords }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getByCountryArticles = (req, res) => {
    const articleCountry = req.params.researchCountry
    articles.find({ researchCountry }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getByAreasArticles = (req, res) => {
    const articleAreas = req.params.areasOfStudy
    articles.find({ areasOfStudy }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getBySubareasArticles = (req, res) => {
    const articleSubareas = req.params.subareasOfStudy
    articles.find({ subareasOfStudy }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getByLanguagesArticles = (req, res) => {
    const articleLanguages = req.params.languages
    articles.find({ languages }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getByPeriodicArticles = (req, res) => {
    const articlePeriodic = req.params.periodicOfArticle
    articles.find({ periodicOfArticles }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getByYearArticles = (req, res) => {
    const articleYear = req.params.yearOfPublication
    articles.find({ yearOfPublication }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const getByDOIArticles = (req, res) => {
    const articleDOI = req.params.linkDOI
    articles.find({ linkDOI }, function(err, articles){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(articles)    
    })
}

const updateArticles = (req, res) => {
  const articleId = req.params.id
  articles.update({id}, { $set : req.body}, function (err) {
    if (err) {
        res.status(500).send({ message: err.message })
    }
    res.status(200).send({ message: "Article updated succesfuly!"})
  })

}

const updateReadStatus = (req, res) => {
    const read = req.params.id
    articles.update({ read }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Status of read updated succesfuly!"})
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
    }
     res.status(200).send(authors)  
    })
}

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

const getByIDAuthors = (req, res) => {
    const authorId = req.params.id
    authors.find({ id }, function(err, authors){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(authors)    
    })
}

const getByAuthors = (req, res) => {
    const author = req.params.author
    authors.find({ author }, function(err, authors){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(authors)    
    })
}

const getByCitationAuthors = (req, res) => {
    const authorCitation = req.params.citationNameAuthor
    authors.find({ citationNameAuthor }, function(err, authors){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(authors)    
    })
}

const getByFirstAuthors = (req, res) => {
    const authorFirst = req.params.articlesFirstAuthor
    authors.find({ articlesFirstAuthor }, function(err, authors){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(authors)    
    })
}

const getByCoAuthors = (req, res) => {
    const authorCo = req.params.articlesCoAuthor
    authors.find({ articlesCoAuthor }, function(err, authors){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(authors)    
    })
}

const getByNationalityAuthors = (req, res) => {
    const authorNationality = req.params.nationality
    authors.find({ nationality }, function(err, authors){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(authors)    
    })
}

const getByGenderAuthors = (req, res) => {
    const authorGender = req.params.gender
    authors.find({ gender }, function(err, authors){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(authors)    
    })
}

const getByAffiliationAuthors = (req, res) => {
    const authorAffiliation = req.params.currentAffiliation
    authors.find({ currentAffiliation }, function(err, authors){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(authors)    
    })
}

const getByAreasAuthors = (req, res) => {
    const authorAreas = req.params.areasOfStudy
    authors.find({ areasOfStudy }, function(err, authors){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(authors)    
    })
}

const getBySubareasAuthors = (req, res) => {
    const authorSubareas = req.params.subareasOfStudy
    authors.find({ subareasOfStudy }, function(err, authors){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(authors)    
    })
}

const updateAuthorProfile = (req, res) => {
    const authorsId = req.params.id
    authors.update({id}, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Author Profile updated succesfuly!"})
    })
}

const updateFollowingStatus = (req, res) => {
    const following = req.params.following
    articles.update({ following }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send({ message: "Following status updated succesfuly!"})
    })
}

const deleteAuthorProfile = (req, res) => {
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

const getAllUsers = (req, res) => {
    console.log(req.url)
    users.find(function(err, getAllUsers){
    if (err) {
        res.status(500).send({ message: err.message})
    }
     res.status(200).send(users)  
    })
}

const createUserProfile = (req, res) => {
    console.log(req.body);
    let user = new users(req.body);
    user.save(function(err){
    if (err) {
        res.status(500).send({ message: err.message})
    }
        res.status(201).send(user.toJSON())
    })
}

const getByIDUsers = (req, res) => {
    const userID = req.params.id
    users.find({ id }, function(err, users){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(users)    
    })
}

const getByNameUsers = (req, res) => {
    const userName = req.params.name
    users.find({ name }, function(err, users){
    if (err) {
        res.status(500).send({ message: err.message})
    }
    res.status(200).send(users)    
    })
}

const updateUserProfile = (req, res) => {
    const usersId = req.params.id
    users.update({id}, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Author Profile updated succesfuly!"})
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
}*/

module.exports = {
    getAllArticles,
    createArticle,
    getArticlesByTitle,
    getByTitleArticles,
    getByAuthorArticles,
    getByCitationArticles,
    getByKeywordsArticles,
    getByCountryArticles,
    getByAreasArticles,
    getBySubareasArticles,
    getByLanguagesArticles,
    getByPeriodicArticles,
    getByYearArticles,
    getByDOIArticles,
    updateArticles,
    updateReadStatus,
    deleteArticle,
    getAllAuthors,
    createAuthorProfile,
    getByIDAuthors,
    getByAuthors,
    getByCitationAuthors,
    getByFirstAuthors,
    getByCoAuthors,
    getByNationalityAuthors,
    getByGenderAuthors,
    getByAffiliationAuthors,
    getByAreasAuthors,
    getBySubareasAuthors,
    updateAuthorProfile,
    updateFollowingStatus,
    deleteAuthorProfile,
    getAllUsers,
    createUserProfile,
    getByIDUsers,
    getByNameUsers,
    updateUserProfile,
    deleteUserProfile*/
}