var express = require('express'); 		
var app = express(); 
var bodyParser = require('body-parser');
var post_it = require('./post_it.js')

app.use(bodyParser());

var port = process.env.PORT || 8000;

var router = express.Router();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

router.post('/', post_it.post_it); //endpoint for Celery webhook
//hit at 

app.use('/', router);

app.listen(process.env.PORT || port);
console.log('Go find yo stuff on port', port);