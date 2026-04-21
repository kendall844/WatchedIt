const express = require("express");
const router = express.Router();

const controller = require("../controllers/showController");
router.get("/:id", controller.getOneShow);
router.get("/", controller.getShows);
router.get("/type/:type", controller.getShowsByType);

router.post("/", controller.createShow);

module.exports = router;