const express = require("express");
const router = express.Router();

const controller = require("../controllers/shorten.controller");

router.get("/*/", controller.redirect);
router.post("/api/shorten", controller.shorten);

module.exports = router;
