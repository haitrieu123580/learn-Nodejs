const express = require('express')
bookRouter = express.Router()
const {controller_getAllBooks,
     controller_getBook, 
     controller_addBook,
     controller_updateBook,
     controller_deleteBook} = require('../controller/bookController')
// CRUD book
bookRouter.get('/', controller_getAllBooks)
bookRouter.get('/:bookId', controller_getBook)
// *! validation 
function validateData(req, res, next){
    if(typeof(req.body.name)!=='string'){
        res.status(201).json({message:'not valid'})
    }
    else{
        next()
    }
}
bookRouter.post('/',validateData, controller_addBook)
bookRouter.put('/:bookId',validateData,controller_updateBook)
bookRouter.delete('/:bookId', controller_deleteBook)

module.exports = bookRouter