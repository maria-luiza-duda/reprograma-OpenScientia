const express = require('express')
const router = express.Router()
const controller = require('../controllers/authorsController.js')

router.get("/", controller.getallauthors)
router.post("/", controller.createpassword)
router.put("/", controller.updateauthor)
router.post("/login", controller.login)
router.get("/name", controller.getbyname)
router.get("/citation", controller.getbycitation)
router.patch("/upname", controller.updatename)
router.patch("/upcitation", controller.updatecitation)
router.patch("/upcurrentAffiliation", controller.updateaffiliation)
router.patch("/upareas", controller.updateareas)
router.patch("/upcurrentProject", controller.updateproject)
router.patch("/:id/following", controller.updatefollowingstatus)
router.delete("/:id", controller.deleteauthor)

module.exports = router;