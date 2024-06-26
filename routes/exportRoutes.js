const express = require("express")
const { exportWithCSVFile } = require("../controllers/exportControllers")

const router = express.Router()

router.post("/export_csvfile", exportWithCSVFile)

module.exports = router