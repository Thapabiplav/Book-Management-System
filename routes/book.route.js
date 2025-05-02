const { fetchBook, addBook, singleFetchBook } = require('../controllers/book.controller')

const router = require('express').Router() 

router.route('/').get(fetchBook).post(addBook)
router.route('/:id').get(singleFetchBook)
module.exports = router