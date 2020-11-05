const express = require("express")
const router = express.Router()
const controller = require("../controllers/translateController")

router.get("/", controller.getAllAuthors)
router.post("/", controller.createAuthorProfile)
router.get("/:id", controller.getByIDAuthors)
router.put("/:id", controller.updateAuthorProfile)
router.patch("/:id/following", controller.updateFollowingStatus)
router.delete("/:id", controller.deleteAuthorProfile)

module.exports = router;