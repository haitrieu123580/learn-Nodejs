// use fs for CRUD and rename file
var fs = require('fs')
var http = require('http');
const { threadId } = require('worker_threads');
http.createServer(function(req,res){
    // read file and sent to client
    fs.readFile('Learn/filesytemModule/index.html',function(err,data){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data)
        return res.end()
    })
}).listen(8080)
// create, update file
/**
 * 1. appendFile(): appends specified content to a file
 * if file doesn't exist, the file will be created
 */
fs.appendFile('Learn/filesytemModule/new_file.html','file content', function(err){
    if(err) throw err;
    console.log('Saved!/Updated!')
})
/**
 * 2.open(): takes a 'flag', it have some values as: 'r'-read, 'w': write..
 * if the file dose not exist, an empty file is created
 */
fs.open('Learn/filesytemModule/new_file.html','r',function(err,file){
    if(err) throw err;
    console.log('saved!')
})
/**
 * 3. writeFile(): replaces the specified file and contents if it exists
 * if it doesn't exist, a new file containing the specified content will be created
 */
fs.writeFile('Learn/filesytemModule/newFile2.html','file content', function(err){
    if(err) throw err;
    console.log('Saved!/Updated!')
})

// delete file
fs.unlink('Learn/filesytemModule/newFile2.html', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

// rename file
fs.rename('Learn/filesytemModule/new_file.html', 'Learn/filesytemModule/new_file_renamed.html', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });