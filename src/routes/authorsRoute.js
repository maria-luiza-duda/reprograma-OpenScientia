require('dotenv-safe').load()
const express = require("express")
const router = express.Router()
const controller = require("../controllers/translateController")

//Filtrar todos os perfis de autores cadastrados
router.get("/", controller.getAllAuthors)

//Filtrar um perfil de autor cadastrado
router.get("/:id", controller.getAuthorByID)

//Criar um novo perfil de autor (Um registro ??)
router.post("/", controller.createAuthorProfile)

//Filtrar um perfil de autor com filtros específicos
router.get("/:name", controller.getAuthorsByName)
router.get("/:citation", controller.getAuthorsByCitation)

//Atualizar o perfil de autor
router.patch("/:name", controller.updateAuthorName)
router.patch("/:photo", controller.updateAuthorPhoto)
router.patch("/:citation", controller.updateAuthorCitation)
router.patch("/:nationality", controller.updateAuthorNationality)
router.patch("/:gender", controller.updateAuthorGender)
router.patch("/:age", controller.updateAuthorAge)
router.patch("/:currentAffiliation", controller.updateAuthorAffiliation)
router.patch("/:areas", controller.updateAuthorAreas)
router.patch("/:currentProject", controller.updateAuthorProject)
router.patch("/:email", controller.updateAuthorEmail)
router.patch("/:lattes", controller.updateAuthorLattes)
router.patch("/:researchGate", controller.updateAuthorGate)
router.patch("/:linkedIn", controller.updateAuthorLinkedin)

//Atualizar o status de "follow" de perfis outros autores
router.patch("/:id/following", controller.updateFollowingStatus)

//Atualizar o status de leitura de artigos de outros autores
router.patch("/:id/read", controller.updateReadStatus)

//Deleção de perfil do autor (feita apenas pelo autor que postou o artigo)
router.delete("/:id", controller.deleteAuthor)

module.exports = router;