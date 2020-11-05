const express = require("express")
const router = express.Router()
const controller = require("../controllers/translateController")

router.get("/", controller.getAllUsers)
router.post("/", controller.createUserProfile)
router.get("/:id", controller.getByIDUsers)
router.put("/:id", controller.updateUserProfile)
router.delete("/:id", controller.deleteUserProfile)

module.exports = router;