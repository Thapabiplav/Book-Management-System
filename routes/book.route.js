const {
  fetchBook,
  addBook,
  singleFetchBook,
  deleteBook,
  editBook,
} = require("../controllers/book.controller");

const router = require("express").Router();

router.route("/").get(fetchBook).post(addBook);
router.route("/:id").get(singleFetchBook).delete(deleteBook).patch(editBook);
module.exports = router;
