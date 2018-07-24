
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var MIME_TYPE = {
  "css": "text/css",
  "gif": "image/gif",
  "html": "text/html",
  "ico": "image/x-icon",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "js": "text/javascript",
  "json": "application/json",
  "pdf": "application/pdf",
  "png": "image/png",
  "svg": "image/svg+xml",
  "swf": "application/x-shockwave-flash",
  "tiff": "image/tiff",
  "txt": "text/plain",
  "wav": "audio/x-wav",
  "wma": "audio/x-ms-wma",
  "wmv": "video/x-ms-wmv",
  "xml": "text/xml"
};


function sendResult(res,date,contetype){
  console.log(contetype);
    res.writeHead(200,{'Content-Type':contetype});
    res.write(date);
    res.end();
}

function read(req,res){
   console.log("req.url:"+req.url);
   var filepath;
   var contentType;
   
  if(req.url === "/"){
      filepath = "./lesson6/lesson.html";
      var ext = path.extname(filepath);
      ext = ext?ext.slice(1):"unknow";
      contentType = MIME_TYPE[ext] || "text/plain";
  }else{
    filepath = "./lesson6/" + url.parse(req.url).pathname;
          var extx = path.extname(filepath);
          extx = extx ? extx.slice(1) : "unknow";
          contentType = MIME_TYPE[extx] || "text/plain";
  }
  fs.readFile(filepath,function (err,date) {
      if(!err){
          sendResult(res,date,contentType);
      }else{
         sendResult(res,"404","text/html");
      }
  });

}

try {
      http.createServer(function (req,res) {
          read(req,res);
      }).listen(9000,'149.28.75.100');
} catch (error) {
  console.error(error);
}
