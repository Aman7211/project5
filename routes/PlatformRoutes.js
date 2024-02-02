
const express = require("express")
const router = express.Router()


const {getAllData} = require('../Controllers/PlatformController')

router.get("/platform", getAllData);

module.exports = router;