const { model_getAllBooks, model_getBook, model_addBook, model_updateBook, model_deleteBook } = require('../model/bookModel')

// đợi cho đến khi Promise được giải quyết và trả về giá trị kết quả 
// trước khi tiếp tục thực thi các lệnh tiếp theo.
const controller_getAllBooks = async (req, res) => {
    try {
        const result = await model_getAllBooks();
        res.send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}
const controller_getBook = async (req, res) => {
    try {
        const result = await model_getBook(parseInt(req.params.bookId));
        res.send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

const controller_addBook = async (req,res) => {
    // validate data
    try {
        const book = {
            name: req.body.name,
            author: req.body.author,
            price: req.body.price,
            status: req.body.status,
            purchase_date: req.body.purchase_date,
        }
        console.log(book.status)
        console.log(book.purchase_date)
        const result = await model_addBook(book);
        res.status(201).json({message: 'add a new book successfully!'})
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

const controller_updateBook = async (req, res) => {
    try {
        // call model
        const book = {
            book_id: req.params.bookId,
            name: req.body.name,
            author: req.body.author,
            price: req.body.price,
            status: req.body.status,
            purchase_date: req.body.purchase_date
        }
        const result = await model_updateBook(book);
        res.status(200).json({message: 'update book successfully!'})
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

const controller_deleteBook = async (req, res) => {
    try {
        // call model
        book = {
            book_id: req.params.bookId
        }
        await model_deleteBook(book)
        res.status(200).json({message: 'delete book successfully!'})
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}
module.exports = {
    controller_getAllBooks,
    controller_getBook,
    controller_addBook,
    controller_updateBook,
    controller_deleteBook
}