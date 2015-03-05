
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser')

var app = express()

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost/seriestv',function(err, res){
	if (err) {console.log("Error:"+err)}
	else console.log("Conexion a la db establecida correctamente");
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

require('./rutas')(app);

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})