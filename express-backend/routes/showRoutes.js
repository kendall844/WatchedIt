const express = require("express");
const router = express.Router();

const controller = require("../controllers/showController");

function requireAuth(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
    }
    next();
}

router.use(requireAuth);

router.get("/type/:type", controller.getShowsByType);
router.get("/:id", controller.getOneShow);
router.get("/", controller.getShows);
router.post("/", controller.createShow);

module.exports = router;