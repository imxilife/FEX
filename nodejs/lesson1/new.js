
var http = require('http');
try {
  http.createServer(function (res, req) {
    var fs = require('fs');
    fs.readFile('./lesson6/lesson.html', function (err, date) {
      if (!err) {
          console.log(date);
          res.writeHeader(200,{'Content-Type':'text/html'});
          res.write(date);
          res.end();
      } else {
        console.log(err);
      }
    });
  }).listen(8080,"127.0.0.1");
} catch (error) {
  console.error(error);
}
