const express = require("express")
const router = express.Router()
const controller = require("../controllers/tradutorController")

router.get("/", controller.getAllArticles)
router.post("/", controller.createArticle)
router.get("/:id", controller.getByIDArticles)
router.put("/:id", controller.updateArticles)
router.patch("/:id/read", controller.updateReadStatus)
router.delete("/:id", controller.deleteArticle)

module.exports = router;