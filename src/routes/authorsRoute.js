const express = require('express')
const router = express.Router()
const controller = require('../controllers/authorsController.js')

router.get("/", controller.getallauthors)
router.get("/authors/name", controller.getbyname)
router.get("/authors/citation", controller.getbycitation)
router.post("/authors/login", controller.login)
router.post("/", controller.createpassword)
router.put("/:id/authors", controller.updateauthor)
router.patch("/:id/following", controller.updatefollowingstatus)
router.delete("/:id", controller.deleteauthor)

module.exports = router;