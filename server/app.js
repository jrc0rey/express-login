var express = require('express'),
	path	= require('path'),
	app		= express(),
	server	= require('http').createServer(app),
	bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');

var users = []

app.get('/', function(request, response){
	response.send('Hello my lovely')
})

app.get('/register', function(request, response){
	response.render('user')
})

app.post('/register', function(request, response){
	users.push(request.body)
	console.log(request.body);
	response.send('success!')
})














server.listen(3000, function(){
	console.log('Serving is running on port 3000')
})