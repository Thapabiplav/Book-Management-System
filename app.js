const express = require("express");

const bookRoute = require("./routes/book.route");

const app = express();

require("./database/connection");
app.use(express.json());

app.use("/books", bookRoute);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Project has successfully started at ${PORT}`);
});
