const express = require("express")
const router = express.Router()
const controller = require("../controllers/translateController")

//Filtrar todos os perfis de autores cadastrados
router.get("/", controller.getAllProfilesAuthors)
router.get("/:id/citationName", controller.getAllProfilesAuthors)

//Filtrar todos os perfis de usuários cadastrados
router.get("/", controller.getAllProfilesUsers)

//Criar um novo perfil de usuário (Um registro ??)
router.post("/", controller.createProfileUser)

//Atualizar o perfil de usuário
router.patch("/:id", controller.updateProfileUser)
router.patch("/:id/nameUser", controller.updateNameUser)
router.patch("/:id/photo", controller.updatePhotoUser)
router.patch("/:id/naturality", controller.updateNaturalityUser)
router.patch("/:id/gender", controller.updateGenderUser)
router.patch("/:id/age", controller.updateAgeUser)
router.patch("/:id/levelOfEducation", controller.updateLevelUser)
router.patch("/:id/areasOfInterest", controller.updateInterestUser)
router.patch("/:id/email", controller.updateEmailUser)
router.patch("/:id/curriculumLattes", controller.updateLattesUser)
router.patch("/:id/researchGate", controller.updateGateUser)
router.patch("/:id/linkedIn", controller.updateLinkedinUser)

//Atualizar o status de "follow" de perfis outros autores
router.patch("/:id/following", controller.updateFollowingStatus)

//Filtrar todos os artigos postados por outros autores cadastrados
router.get("/:idArticle", controller.getByIdArticles)

//Filtros para encontrar artigos já postados
router.get("/:id/title", controller.getByTitleArticles)
router.get("/:id/author", controller.getByAuthorArticles)
router.get("/:id/citationNameAuthor", controller.getByCitationArticles)
router.get("/:id/keywords", controller.getByKeywordsArticles)
router.get("/:id/researchCountry", controller.getByCountryArticles)
router.get("/:id/areasOfStudy", controller.getByAreasArticles)
router.get("/:id/subareasOfStudy", controller.getBySubareasArticles)
router.get("/:id/languages", controller.getByLanguageArticles)
router.get("/:id/periodicOfArticle", controller.getByPeriodicArticles)
router.get("/:id/yearOfPublication", controller.getByYearArticles)

//Atualizar o status de leitura de artigos de outros autores
router.patch("/:idArticle/read", controller.updateReadStatus)

//Deleção de perfil do usuário (feita apenas pelo próprio usuário)
router.delete("/:id", controller.deleteProfileUser)

module.exports = router;