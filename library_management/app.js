require('dotenv').config()
var PORT = process.env.PORT || 5000
var KEY_SESSION = process.env.KEY_SESSION
var express = require('express');
var path = require('path');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy // passport local dung cho viec chung thuc
const session = require('express-session')

var app = express();

const store = session.MemoryStore()

//khai bao session
app.use(session({
  saveUninitialized: false,
  secret: KEY_SESSION,
  cookie:{
    maxAge:1000*10 //10s
  },
  store
}))

app.use(passport,passport.initialize()); //khai bao passport
app.use(passport.session()); //khai bao passport lam viec voi session

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




// authenication with portjs
app.post('/login',passport.authenticate('local',{
  successRedirect:'/profile',
  failureRedirect:'/login'
}), (req, res)=>{
  try {
    res.json({body:req.body})
  } catch (error) {
    res.json({message:error.stack})
  }
})

// this is database
const user ={
  username: 'your-username',
  password: 'your-password'
}

passport.use(new LocalStrategy( (username,password, done)=>{
  console.log(`username::::${username}, password::::${password}`)
  if(username === user.username && password=== user.password){
    return done(null,{
      // gan cho session
      username,
      password,
      active:true
    })
  }
  else{
    done(null, false)
  }
}))

passport.serializeUser((user, done) => done(null, user.username))

passport.deserializeUser( (username, done) => {
  console.log(`deserializeUser:::`, username);
  //check username
  if(username === user.username){
      return done(null, {
          username,
          active: true
      })
  }
  done(null, false)
})

// checking
app.get('/profile', (req, res) => {
  if(req.isAuthenticated()){
      return res.status(200).json({
          status: 'success',
          data: {
              name: 'user valid',
          }
      })
  }
  res.status(200).json({
      status: 'failed',
      message: 'Missing'
  })
  
})


app.listen(PORT, () => {console.log(`listening on ${PORT}`)})

