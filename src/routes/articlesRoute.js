const express = require('express')
const router = express.Router()
const controller = require('../controllers/articlesController.js')

router.get("/", controller.getallarticles)
router.post("/", controller.createarticle)
router.put("/", controller.updatearticle)
router.get("/title", controller.getbytitle)
router.get("/author", controller.getbyauthor)
router.get("/keywords", controller.getbykeywords)
router.get("/areas", controller.getbyareas)
router.get("/year", controller.getbyyear)
router.patch("/uptitle", controller.updatetitle)
router.patch("/upauthor", controller.updateauthor)
router.patch("/upresumen", controller.updateresumen)
router.patch("/upresults", controller.updateresults)
router.patch("/upkeywords", controller.updatekeywords)
router.patch("/upareas", controller.updateareas)
router.patch("/:id/read", controller.updatereadstatus)
router.delete("/:id", controller.deletearticle)

module.exports = router;