// Create web server on port 3000
// http://localhost:3000
var express = require('express');
var app = express();
var port = 3000;
app.get('/', function(req, res) {
    res.send('Hello World');
}
);
// return the current time
app.get('/time', function(req, res) {
    res.send(new Date());
}
);
// return the current time
app.get('/time', function(req, res) {
    res.send(new Date());
}
);
// return the current time
app.get('/time', function(req, res) {
    res.send(new Date());
}
);
app.listen(port, function() {
    console.log('Server listening on port ' + port);
}
);
// 
// // return the current time
// app.get('/time', function(req, res) {
//     res.send(new Date());
// }
// );
// 
// 
/

