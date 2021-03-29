const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/src", express.static(path.resolve("client", "src")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("client/public", "index.html"));
});

app.listen(PORT);
