require('dotenv').config()
var PORT = process.env.PORT || 5000
var KEY_SESSION = process.env.KEY_SESSION
var express = require('express');
var app = express();
const bookRouter = require('./routes/bookRouter')
const authRouter = require('./routes/authRouter')
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/book', bookRouter)
app.use('/auth', authRouter)
app.listen(PORT, () => {console.log(`listening on ${PORT}`)})

