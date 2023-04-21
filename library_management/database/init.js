const connection = require('./connection')

// create databases
connection.query(`create table if not exists Book(
    book_id INT AUTO_INCREMENT,
    author VARCHAR(255) not null,
    name VARCHAR(255) not null,
    price INT,
    status boolean DEFAULT false,
    purchase_date DATE DEFAULT (CURRENT_DATE),
    primary key (book_id),
    check (price>0)
);`, (err, result) =>{
    if(err) console.log(err)
    else console.log('successfully create new database book')
})
const books = [
    ['author01','book01',1000,false],
    ['author02','book02',2000,true],
    ['author01','book03',1000,true],
    ['author04','book04',4000,false]
]
connection.query(`insert into Book (author, name, price, status) values ?`,[books], (err, result) =>{
    if(err) console.log(err)
    console.log(result)
})
// librarian table
connection.query(`create table if not exists librarian(
    librarian_id INT AUTO_INCREMENT,
    name VARCHAR(255),
    password VARCHAR(255),
    primary key (librarian_id)
);`,(err, result) =>{
    if(err) console.log(err)
    else console.log('successfully create new database librarian')
})
const librarians = [
    ['librarian01','password01'],
    ['librarian02','password02']
]
connection.query(`insert into librarian (name, password) values ?`,[librarians], (err, result) =>{
    if(err) console.log(err)
    console.log(result)
})
// member table
connection.query(`create table if not exists member(
    member_id INT AUTO_INCREMENT,
    name VARCHAR(255),
    address VARCHAR(255),
    date_of_membership date DEFAULT (CURRENT_DATE),
    primary key (member_id)

);`,(err, result) =>{
    if(err) console.log(err)
    else console.log('successfully create new database member')
})
const members = [
    ['member01','strict01'],
    ['member02','strict02']
]
connection.query(`insert into member (name, address) values ?`,[members], (err, result) =>{
    if(err) console.log(err)
    console.log(result)
})
// transaction table
connection.query(`create table if not exists transaction(
    transaction_id INT AUTO_INCREMENT,
    member INT not null,
    book INT not null,
    date_of_issue DATE not null DEFAULT (CURRENT_DATE),
    due_date DATE not null DEFAULT (CURRENT_DATE),
    primary key (transaction_id),
    foreign key (member) REFERENCES library.member(member_id),
    foreign key (book) REFERENCES library.Book(book_id)
);`,(err, result) =>{
    if(err) console.log(err)
    else console.log('successfully create new database transaction')
})
const transaction = [
    [1,1],
    [2,2]
]
connection.query(`insert into transaction (member, book) values ?`,[transaction], (err, result) =>{
    if(err) console.log(err)
    console.log(result)
})
