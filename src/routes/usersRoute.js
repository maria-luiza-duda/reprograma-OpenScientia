const express = require('express')
const router = express.Router()
const controller = require('../controllers/translateController.js')

//Filtrar todos os perfis de usuári@s cadastrados
router.get("/", controller.getAllUsers)

//Filtrar um perfil de usuári@ cadastrados
router.get("/:id", controller.getUserByID)
router.get("/:name", controller.getUserByName)

//Criar um novo perfil de usuário (Um registro ??)
router.post("/", controller.createProfileUser)

//Atualizar o perfil de usuário
router.put("/", controller.updateUser)
router.patch("/:name", controller.updateUserName)
router.patch("/:photo", controller.updateUserPhoto)
router.patch("/:naturality", controller.updateUserNaturality)
router.patch("/:gender", controller.updateUserGender)
router.patch("/:age", controller.updateUserAge)
router.patch("/:levelOfEducation", controller.updateUserEducation)
router.patch("/:areas", controller.updateUserInterest)
router.patch("/:email", controller.updateUserEmail)
router.patch("/:password", controller.updateUserPassword)

//Atualizar o status de leitura de artigos de outros autores
router.patch("/:id/read", controller.updateReadStatus)

//Atualizar o status de "follow" de perfis outros autores
router.patch("/:id/following", controller.updateFollowingStatus)

//Deleção de perfil do usuário (feita apenas pelo próprio usuário)
router.delete("/:id", controller.deleteUserProfile)

module.exports = router;