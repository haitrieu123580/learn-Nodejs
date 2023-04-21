const connection = require("../database/connection")

const model_getAllBooks = function () {
  return new Promise((resolve, reject) => {
    connection.query(`select * from Book`, [], (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}
const model_getBook = function (id) {
  return new Promise((resolve, reject) => {
    connection.query(`select * from Book where book_id = ?`, [id], (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}
const model_addBook = function (book) {
  return new Promise((resolve, reject) => {
    connection.query(`insert into Book (author, name, price, status,purchase_date) values (?,?,?,?, STR_TO_DATE(?, '%Y-%d-%m'))`,
      [book.author, book.name, book.price, book.status,book.purchase_date],
      (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
  })
}

const model_updateBook = function (book) {
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE Book SET name = ?, author = ?, price = ?, status = ?, purchase_date = STR_TO_DATE(?, '%Y-%d-%m') WHERE book_id = ?`,
      [book.name,book.author, book.price, book.status, book.purchase_date, book.book_id],
      (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
  })
}
const model_deleteBook = function (book) {
  return new Promise((resolve, reject) => {
    connection.query(`delete from Book where book_id = ?`,
      [book.book_id],
      (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
  })
}
module.exports = {
  model_getAllBooks,
  model_getBook,
  model_addBook,
  model_updateBook,
  model_deleteBook
}
