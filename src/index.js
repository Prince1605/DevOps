const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

abc();

app.get("/", (req, res) => {
  res.send("DevOps Todo API Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});