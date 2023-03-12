var path = require("../Module/node_modules/path");
var express = require("../Module/node_modules/express");
var app = express();
var server = require('http').createServer(app);
var io = require('../Module/node_modules/socket.io')(server);

//Chỉ ra đường dẫn chứa css, js, images...
app.use(express.static(path.join(__dirname, 'public')));

//Tạo router
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/public/views/chat.html'));
});

//Tạo socket 
io.on('connection', function (socket) {
    console.log('Welcome to server chat');

    socket.on('send', function (data) {
        io.sockets.emit('send', data);
    });
});

//Khởi tạo 1 server listen tại 1 port
server.listen(3000);
