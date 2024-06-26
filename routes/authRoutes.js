const express = require("express")
const { getUserAuthLogin, getUserLogout } = require("../controllers/authControllers")

const router = express.Router()

router.post("/login", getUserAuthLogin)
router.post("/logout", getUserLogout)

module.exports = router