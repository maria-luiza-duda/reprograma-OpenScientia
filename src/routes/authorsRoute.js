const express = require("express")
const router = express.Router()
const controller = require("../controllers/translateController")

//Filtrar todos os perfis de autores cadastrados
router.get("/", controller.getAllProfilesAuthors)

//Criar um novo perfil de autor (Um registro ??)
router.post("/", controller.createProfileAuthor)

//Atualizar o perfil de autor
router.patch("/:id", controller.updateProfileAuthor)
router.patch("/:id/name", controller.updateNameAuthor)
router.patch("/:id/photo", controller.updatePhotoAuthor)
router.patch("/:id/citationName", controller.updateCitationAuthor)
router.patch("/:id/articlesFirstAuthor", controller.updateFirstAuthor)
router.patch("/:id/articlesCoAuthor", controller.updateCoAuthor)
router.patch("/:id/nationality", controller.updateNationalityAuthor)
router.patch("/:id/gender", controller.updateGenderAuthor)
router.patch("/:id/age", controller.updateAgeAuthor)
router.patch("/:id/currentAffiliation", controller.updateAffiliationAuthor)
router.patch("/:id/areasOfStudy", controller.updateAreasAuthor)
router.patch("/:id/subareasOfStudy", controller.updateSubareasAuthor)
router.patch("/:id/currentProject", controller.updateProjectAuthor)
router.patch("/:id/email", controller.updateEmailAuthor)
router.patch("/:id/curriculumLattes", controller.updateLattesAuthor)
router.patch("/:id/researchGate", controller.updateGateAuthor)
router.patch("/:id/linkedIn", controller.updateLinkedinAuthor)

//Atualizar o status de "follow" de perfis outros autores
router.patch("/:id/following", controller.updateFollowingStatus)

//Postar um novo artigo (apenas autores cadastrados)
router.post("/", controller.createArticle)

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

//Atualizar os artigos (apenas para os artigos postados por seus respectivos autores cadastrados)
router.patch("/:idArticle", controller.updateArticle)
router.patch("/:idArticle/title", controller.updateTitleArticle)
router.patch("/:idArticle/author", controller.updateAuthorArticle)
router.patch("/:idArticle/citationNameAuthor", controller.updateCitationArticle)
router.patch("/:idArticle/resumen", controller.updateResumenArticle)
router.patch("/:idArticle/introduction", controller.updateIntroductionArticle)
router.patch("/:idArticle/methods", controller.updateMethodsArticle)
router.patch("/:idArticle/results", controller.updateResultsArticle)
router.patch("/:idArticle/keywords", controller.updateKeywordsArticle)
router.patch("/:idArticle/researchCountry", controller.updateCountryArticle)
router.patch("/:idArticle/areasOfStudy", controller.updateAreasArticle)
router.patch("/:idArticle/subareasOfStudy", controller.updateSubareasArticle)
router.patch("/:idArticle/languages", controller.updateLanguageArticle)
router.patch("/:idArticle/periodicOfArticle", controller.updatePeriodicArticle)
router.patch("/:idArticle/yearOfPublication", controller.updateYearArticle)
router.patch("/:idArticle/linkDOI", controller.updateDoiArticle)
router.patch("/:idArticle/images", controller.updateImagesArticle)

//Atualizar o status de leitura de artigos de outros autores
router.patch("/:idArticle/read", controller.updateReadStatus)

//Deleção de artigo (feita apenas pelo autor que postou o artigo)
router.delete("/:idArticle", controller.deleteArticle)

//Deleção de perfil do autor (feita apenas pelo autor que postou o artigo)
router.delete("/:id", controller.deleteProfileAuthor)

module.exports = router;