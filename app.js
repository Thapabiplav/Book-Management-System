const express = require("express");
const app = express();

const cors = require("cors");
const bookRoute = require("./routes/book.route");

require("./database/connection");
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/books", bookRoute);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Project has successfully started at ${PORT}`);
});
