const router = require("express").Router();
const googleBookRoutes = require("./googleBooks");
const booksRoutes = require("./book");

// Google Book routes
router.use("/googleBooks", googleBookRoutes);
router.use("/userBooks", booksRoutes);

module.exports = router;