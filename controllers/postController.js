// metodi controller
const index = (req, res) => {
  res.send("Elenco dei post");
};

const show = (req, res) => {
  res.send("Dettaglio post: " + req.params.id);
};

module.exports = { index, show };
