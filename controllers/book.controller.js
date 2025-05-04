const { books } = require("../database/connection");

exports.addBook = async (req, res) => {
  const { bookName, bookAuthor, bookPrice, bookGenre } = req.body;
  if (!bookName || !bookName || !bookAuthor || !bookGenre || !bookPrice) {
    return res.status(400).json({
      message: "Please provide the field",
    });
  }
  await books.create({
    bookName,
    bookPrice,
    bookAuthor,
    bookGenre,
  });

  res.status(201).json({
    message: "book added successfully",
  });
};

exports.fetchBook = async (req, res) => {
  const data = await books.findAll();
  res.status(200).json({
    message: "Book fetched successfully",
    data,
  });
};

exports.singleFetchBook = async (req, res) => {
  const id = req.params.id;
  const data = await books.findByPk(id);

  res.status(200).json({
    message: "single book fetched successfully",
    data,
  });
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  await books.destroy({
    where: {
      id,
    },
  });
  res.status(200).json({
    message: "book deleted successfully",
  });
};

exports.editBook = async (req, res) => {
  const { id } = req.params;
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  await books.update(
    {
      bookName,
      bookPrice,
      bookAuthor,
      bookGenre,
    },
    {
      where: {
        id,
      },
    }
  );
  const data = await books.findAll();
  res.status(200).json({
    message: "book updated successfully",
    data,
  });
};
