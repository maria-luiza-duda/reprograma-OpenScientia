const express = require('express')
const router = express.Router()
const controller = require('../controllers/translateController.js')
//const articles = require('../models/articles')

//Filtrar todos os artigos postados por outros autores cadastrados
router.get("/", controller.getAllArticles)

//Filtros para encontrar artigos já postados
router.get("/:title", controller.getArticlesByTitle)
router.get("/:author", controller.getArticlesByAuthor)
router.get("/:citation", controller.getArticlesByCitation)
router.get("/:keywords", controller.getArticlesByKeywords)
router.get("/:country", controller.getArticlesByCountry)
router.get("/:areas", controller.getArticlesByAreas)
router.get("/:languages", controller.getArticlesByLanguage)
router.get("/:periodic", controller.getArticlesByPeriodic)
router.get("/:year", controller.getArticlesByYear)

//Postar um novo artigo (apenas autores cadastrados)
router.post("/", controller.createArticle)

//Atualizar os artigos (apenas para os artigos postados por seus respectivos autores cadastrados)
router.put("/", controller.updateArticle)
router.patch("/:title", controller.updateArticleTitle)
router.patch("/:author", controller.updateArticleAuthor)
router.patch("/:citation", controller.updateArticleCitation)
router.patch("/:resumen", controller.updateArticleResumen)
router.patch("/:introduction", controller.updateArticleIntroduction)
router.patch("/:methods", controller.updateArticleMethods)
router.patch("/:results", controller.updateArticleResults)
router.patch("/:keywords", controller.updateArticleKeywords)
router.patch("/:country", controller.updateArticleCountry)
router.patch("/:areas", controller.updateArticleAreas)
router.patch("/:languages", controller.updateArticleLanguage)
router.patch("/:periodic", controller.updateArticlePeriodic)
router.patch("/:year", controller.updateArticleYear)
router.patch("/:linkDOI", controller.updateArticleDoi)
router.patch("/:images", controller.updateArticleImages)

//Deleção de artigo (feita apenas pelo autor que postou o artigo)
router.delete("/:id", controller.deleteArticle)

module.exports = router;