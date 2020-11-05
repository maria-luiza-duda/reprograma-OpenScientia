const articles = require("../models/articles.json")
const authors = require("../models/authors.json")
const users = require("../models/users.json")
const fs = require("fs")

const getAllArticles = (req, res) => {
    console.log(req.url)
    res.status(200).send(articles)
}

const createArticle = (req, res) => {
    const { id, title, author, citationNameAuthor, resumen, introduction, methods, results, keywords, researchCountry, areasOfStudy, subareasOfStudy, languages, periodicOfArticle, yearOfPublication, linkDOI, read } = req.body
    articles.push({ id, title, author, citationNameAuthor, resumen, introduction, methods, results, keywords, researchCountry, areasOfStudy, subareasOfStudy, languages, periodicOfArticle, yearOfPublication, linkDOI, read })
    fs.writeFile("./src/models/articles.json", JSON.stringify(articles), 'utf8', function (err) { 
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("Congratulations! You posted your article!")
            const articleFound = articles.find(article => article.id == id)      
            res.status(200).send(articleFound)
        }
    })
}

const getByIDArticles = (req, res) => {
    const articleId = req.params.id
    const articleFound = articles.find((article) => article.id == articleId)
    if (articleFound) {
        res.status(200).send(articleFound)
    } else {
        res.status(404).send({ message: "Article not found!" })
    }
}

const updateArticles = (req, res) => {
    try {
        const articleId = req.params.id
        const articleToUpdate = req.body 

        const articleFound = articles.find(article => article.id == articleId)       
        const articleIndex = articles.indexOf(articleFound) 

        if (articleIndex >= 0) { 
            articles.splice(articleIndex, 1, articleToUpdate) 
        } else {
            res.status(404).send({ message: "Article not found to be update!" })
        }

        fs.writeFile("./src/models/articles.json", JSON.stringify(articles), 'utf8', function (err) { 
            if (err) {
                res.status(500).send({ message: err }) 
            } else {
                console.log("Article updated succesful!")
                const articleUpdated = articles.find(article => article.id == articleId) 
                res.status(200).send(articleUpdated) 
            }
        })
    } catch (err) {
        res.status(500).send({ message: err })
    }
}

const updateReadStatus = (req, res) => {
    try {
        const articleId = req.params.id 
        const read = req.body.watched   

        const articleToUpdate = articles.find(article => article.id == articleId) 
        const articleIndex = articles.indexOf(articleToUpdate) 

        if (articleIndex >= 0) { 
            articleToUpdate.read = read 
            articles.splice(articleIndex, 1, articleToUpdate) 
        } else {
            res.status(404).send({ message: "Article not found to update the read status!" })
        }

        fs.writeFile("./src/models/articles.json", JSON.stringify(articles), 'utf8', function (err) { 
            if (err) {
                res.status(500).send({ message: err })
            } else {
                console.log("Read status updated succesful!")
                const articleUpdated = articles.find((article) => article.id == articleId) 
                res.status(200).send(articleUpdated) 
            }
        })
    } catch (err) {
        res.status(500).send({ message: err })
    }
}

const deleteArticle = (req, res) => {
    try {
        const articleId = req.params.id
        const articleFound = articles.find(article => article.id == articleId) 
        const articleIndex = articles.indexOf(articleFound) 

        if (articleIndex >= 0) { 
            articles.splice(articleIndex, 1) 
        } else {
            res.status(404).send({ message: "Article not found to be deleted..." })
        }

        fs.writeFile("./src/models/articles.json", JSON.stringify(articles), 'utf8', function (err) { 
            if (err) {
                res.status(500).send({ message: err })
            } else {
                console.log("Article succesful deleted!")
                res.sendStatus(204)
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Can't delete this article..." })
    }
}

const getAllAuthors = (req, res) => {
    console.log(req.url)
    res.status(200).send(authors)
}

const createAuthorProfile = (req, res) => {
    const { id, author, photo, citationNameAuthor, articlesFirstAuthor, articlesCoAuthor, naturality, gender, age, currentAffiliation, areasOfStudy, subareasOfStudy, currentProject, email, curriculumLattes, researchGate, linkedIn, following } = req.body
    authors.push({ id, author, photo, citationNameAuthor, articlesFirstAuthor, articlesCoAuthor, naturality, gender, age, currentAffiliation, areasOfStudy, subareasOfStudy, currentProject, email, curriculumLattes, researchGate, linkedIn, following })
    fs.writeFile("./src/models/authors.json", JSON.stringify(authors), 'utf8', function (err) { 
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log(`Welcome to Open ScienTIa, ${author}!`)
            const authorFound = author.find(author => author.id == id)      
            res.status(200).send(authorFound)
        }
    })
}

const getByIDAuthors = (req, res) => {
    const authorId = req.params.id
    const authorFound = authors.find((author) => author.id == authorId)
    if (authorFound) {
        res.status(200).send(authorFound)
    } else {
        res.status(404).send({ message: "Author not found!" })
    }
}

const updateAuthorProfile = (req, res) => {
    try {
        const authorId = req.params.id
        const authorToUpdate = req.body 

        const authorFound = authors.find(author => author.id == authorId)       
        const authorIndex = authors.indexOf(authorFound) 

        if (authorIndex >= 0) { 
            articles.splice(authorIndex, 1, authorToUpdate) 
        } else {
            res.status(404).send({ message: "Author profile not found to be update!" })
        }

        fs.writeFile("./src/models/authors.json", JSON.stringify(authors), 'utf8', function (err) { 
            if (err) {
                res.status(500).send({ message: err }) 
            } else {
                console.log("Author profile updated succesful!")
                const authorUpdated = author.find(author => author.id == authorId) 
                res.status(200).send(authorUpdated) 
            }
        })
    } catch (err) {
        res.status(500).send({ message: err })
    }
}

const updateFollowingStatus = (req, res) => {
    try {
        const authorId = req.params.id 
        const following = req.body.watched   

        const authorToUpdate = authors.find(author => author.id == authorId) 
        const authorIndex = authors.indexOf(authorToUpdate) 

        if (authorIndex >= 0) { 
            authorToUpdate.following = following
            authors.splice(authorIndex, 1, authorToUpdate) 
        } else {
            res.status(404).send({ message: "Author not found to update the following status!" })
        }

        fs.writeFile("./src/models/authors.json", JSON.stringify(authors), 'utf8', function (err) { 
            if (err) {
                res.status(500).send({ message: err })
            } else {
                console.log("Following status updated succesful!")
                const authorUpdated = authors.find((author) => author.id == authorId) 
                res.status(200).send(authorUpdated) 
            }
        })
    } catch (err) {
        res.status(500).send({ message: err })
    }
}

const deleteAuthorProfile = (req, res) => {
    try {
        const authorId = req.params.id
        const authorFound = authors.find(author => author.id == authorId) 
        const authorIndex = authors.indexOf(authorFound) 

        if (authorIndex >= 0) { 
            author.splice(authorIndex, 1) 
        } else {
            res.status(404).send({ message: "Author profile not found to be deleted..." })
        }

        fs.writeFile("./src/models/authors.json", JSON.stringify(authors), 'utf8', function (err) { 
            if (err) {
                res.status(500).send({ message: err })
            } else {
                console.log("Author profile succesful deleted!")
                res.sendStatus(204)
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Can't delete this author..." })
    }
}

const getAllUsers = (req, res) => {
    console.log(req.url)
    res.status(200).send(users)
}

const createUserProfile = (req, res) => {
    const { id, name, photo, naturality, gender, age, levelOfEducation, areasOfInterest, email, curriculumLattes, researchGate, linkedIn } = req.body
    users.push({ id, name, photo, naturality, gender, age, levelOfEducation, areasOfInterest, email, curriculumLattes, researchGate, linkedIn })
    fs.writeFile("./src/models/users.json", JSON.stringify(users), 'utf8', function (err) { 
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log(`Welcome to Open ScienTIa, ${user}!`)
            const userFound = user.find(user => user.id == id)      
            res.status(200).send(userFound)
        }
    })
}

const getByIDUsers = (req, res) => {
    const userId = req.params.id
    const userFound = users.find((user) => user.id == userId)
    if (userFound) {
        res.status(200).send(userFound)
    } else {
        res.status(404).send({ message: "User not found!" })
    }
}

const updateUserProfile = (req, res) => {
    try {
        const userId = req.params.id
        const userToUpdate = req.body 

        const userFound = users.find(user => user.id == userId)       
        const userIndex = users.indexOf(userFound) 

        if (userIndex >= 0) { 
            users.splice(userIndex, 1, userToUpdate) 
        } else {
            res.status(404).send({ message: "User profile not found to be update!" })
        }

        fs.writeFile("./src/models/users.json", JSON.stringify(users), 'utf8', function (err) { 
            if (err) {
                res.status(500).send({ message: err }) 
            } else {
                console.log("User profile updated succesful!")
                const userUpdated = user.find(user => user.id == userId) 
                res.status(200).send(userUpdated) 
            }
        })
    } catch (err) {
        res.status(500).send({ message: err })
    }
}

const deleteUserProfile = (req, res) => {
    try {
        const userId = req.params.id
        const userFound = users.find(user => user.id == userId) 
        const userIndex = users.indexOf(userFound) 

        if (userIndex >= 0) { 
            user.splice(userIndex, 1) 
        } else {
            res.status(404).send({ message: "User profile not found to be deleted..." })
        }

        fs.writeFile("./src/models/users.json", JSON.stringify(users), 'utf8', function (err) { 
            if (err) {
                res.status(500).send({ message: err })
            } else {
                console.log("User profile succesful deleted!")
                res.sendStatus(204)
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Can't delete this user..." })
    }
}

module.exports = {
    getAllArticles,
    createArticle,
    getByIDArticles,
    updateArticles,
    updateReadStatus,
    deleteArticle,
    getAllAuthors,
    createAuthorProfile,
    getByIDAuthors,
    updateAuthorProfile,
    updateFollowingStatus,
    deleteAuthorProfile,
    getAllUsers,
    createUserProfile,
    getByIDUsers,
    updateUserProfile,
    deleteUserProfile
}