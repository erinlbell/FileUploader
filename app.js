// npm i -g multer
// npm i -g nodemon


var express = require('express'),
multer      = require('multer'),
fs          = require('fs'),
app         = express(),
http        = require("http"),
multer      = require('multer'),
server      = http.createServer(app),
router      = express.Router(),
path        = require('path');



app.use(function (req, res, next) {
                res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
                res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
                res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                //res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Credentials", true);
                next();
});

var middleware = [
                express.static(path.join(__dirname, './uploads/'))
]

app.use(middleware);

var storage = multer.diskStorage({
                destination: function (req, file, callback) {
                                callback(null, './uploads/')
                },
                filename: function (req, file, callback) {
                                var datetimestamp = Date.now();
                                console.log("Filename " + file.originalname);
        callback(null, file.originalname)
                },
                onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
                },
                onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
                }
});

var upload = multer().any('selectedFile')
//**THIS IS MANDATORY, WITHOUT THIS NOT WORK**

app.use(multer({
                storage:storage
}).any('selectedFile'));
  

app.get('/', (req, res) => res.end('Hello root!!'))
app.get('/ryan', (req, res) => res.end('Hello Ryan!'))

app.get('/api', function (req, res) {
                res.end('Latham File Upload');
});

//app.use('/api', router);

app.post('/api', function (req, res, next) {
                
  upload(req,res,function(err){
    if(err){
      res.status(500).json({'success':false});
      return;
    }
    
    res.status(200).json({success:true,message:"File was uploaded successfully !"});
  });
});

 
 
var PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log('Working on port ' + PORT);
});
