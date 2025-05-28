// recupero variabile di connessione al db
const connection = require("../data/db");

// metodi controller
const index = (req, res) => {
  const sql = "SELECT * FROM posts";

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    res.json(results);
  });
};

const show = (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM posts WHERE id = ?";

  // query per mostrare anche i tag
  const tagSql = `
    SELECT T.*
    FROM tags T
    JOIN post_tag PT ON T.id = PT.tag_id
    WHERE PT.post_id = ?;
  `;

  connection.query(sql, [id], (err, postResult) => {
    if (err)
      return res.status(500).json({ error: "Database query failed" + err });

    if (postResult.length === 0)
      return res.status(404).json({ error: "Post Not Found" });

    const post = postResult[0];

    connection.query(tagSql, [id], (err, tagResult) => {
      if (err)
        return res.status(500).json({ error: "Database query failed" + err });

      // creo la proprietà da aggiungere all'oggetto post
      post.tags = tagResult;

      res.json(post);
    });
  });
};

module.exports = { index, show };
