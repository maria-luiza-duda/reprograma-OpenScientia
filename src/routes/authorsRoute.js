const express = require('express')
const router = express.Router()
const controller = require('../controllers/authorsController.js')

router.get("/", controller.getallauthors)
router.post("/", controller.createpassword)
router.put("/", controller.updateauthor)
router.post("/login", controller.login)
router.get("/name", controller.getbyname)
router.get("/citation", controller.getbycitation)
router.patch("/name", controller.updatename)
router.patch("/citation", controller.updatecitation)
router.patch("/currentAffiliation", controller.updateaffiliation)
router.patch("/areas", controller.updateareas)
router.patch("/currentProject", controller.updateproject)
router.patch("/:id/following", controller.updatefollowingstatus)
router.delete("/:id", controller.deleteauthor)

module.exports = router;