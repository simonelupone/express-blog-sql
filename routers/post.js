const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

// rotta index
router.get("/", postController.index);

// rotta dettaglio del post
router.get("/:id", postController.show);

module.exports = router;
