const express = require('express')
const router = express.Router()
const controller = require('../controllers/translateController.js')

router.get("/", controller.getAllAuthors)
router.post("/", controller.createAuthorProfile)
router.get("/name", controller.getAuthorsByName)
router.get("/citation", controller.getAuthorsByCitation)
router.put("/", controller.updateAuthor)
router.patch("/name", controller.updateAuthorName)
router.patch("/citation", controller.updateAuthorCitation)
router.patch("/currentAffiliation", controller.updateAuthorAffiliation)
router.patch("/areas", controller.updateAuthorAreas)
router.patch("/currentProject", controller.updateAuthorProject)
router.patch("/:id/following", controller.updateFollowingStatus)
router.delete("/:id", controller.deleteAuthor)

module.exports = router;