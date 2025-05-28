const express = require("express");
const router = express.Router();

// rotta index
router.get("/", (req, res) => {
  req.send("Elenco dei post");
});

// rotta dettaglio del post
router.get("/:id", (req, res) => {
  res.send("Dettaglio post: " + req.params.id);
});

module.exports = router;
