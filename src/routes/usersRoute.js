const express = require('express')
const router = express.Router()
const controller = require('../controllers/translateController.js')

router.get("/", controller.getAllUsers)
router.post("/", controller.createProfileUser)
router.get("/name", controller.getUserByName)
router.put("/", controller.updateUser)
router.patch("/name", controller.updateUserName)
router.patch("/naturality", controller.updateUserNaturality)
router.patch("/gender", controller.updateUserGender)
router.patch("/areas", controller.updateUserInterest)
router.patch("/email", controller.updateUserEmail)
router.patch("/password", controller.updateUserPassword)
router.patch("/:id/read", controller.updateReadStatus)
router.patch("/:id/following", controller.updateFollowingStatus)
router.delete("/:id", controller.deleteUserProfile)

module.exports = router;