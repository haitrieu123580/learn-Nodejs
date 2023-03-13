var express = require('D:/Personal/Nodejs/Module/node_modules/express')
var app = express();
var fs = require('fs');
app.get('/listUsers', function(req,res){
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // thêm header này để giải quyết vấn đề CORS
    fs.readFile('Learn/RESTapi/user.json','utf-8',function(err,data){
        if(err) throw err
        res.end(data)
    })
})


// var user = {
//     "user4" : {
//        "name" : "mohit",
//        "password" : "password4",
//        "profession" : "teacher",
//        "id": 4
//     }
//  }
 
//  app.post('/addUser', function (req, res) {
//     // First read existing users.
//     res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
//     // console.log(__dirname)
//     fs.readFile( "Learn/RESTapi/user.json", 'utf8', function (err, data) {
//         if(err) throw err
//        data = JSON.parse( data );
//        data["user4"] = user["user4"];
//        console.log( data );
//        res.end( JSON.stringify(data));
//     });
//  })
 
 app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( "Learn/RESTapi/user.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })
 var id = 2;

 app.delete('/deleteUser', function (req, res) {
    // First read existing users.
    fs.readFile("Learn/RESTapi/user.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
        
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

 var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log(`server is listening at http:${host}:${port}`)
})