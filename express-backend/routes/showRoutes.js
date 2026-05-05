const express = require("express");
const router = express.Router();

const controller = require("../controllers/showController");
const requireAuth = require("../config/requireAuth");

router.get("/", requireAuth, controller.getShows);
router.post("/", requireAuth, controller.createShow);
router.delete("/:id", requireAuth, controller.deleteShow);

module.exports = router;