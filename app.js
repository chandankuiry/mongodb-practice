var express=require('express'),
	app=express(),
	engines=require('consolidate'),
	MongoClient =require('mongodb').MongoClient,
	assert =require('assert');

app.engine('html', engines.nunjucks);
app.set('view engine','html');
app.set('views',__dirname + '/views');


app.get('/',function (req,res) {
	//here hello is a template file
	res.render('hello', { 'name' :'Templates'}); 
});

app.use(function (req,res){
	res.sendStatus(404);
});

var server=app.listen(3000, function(){
	var port=server.address().port;
	console.log('Express server lisrten to port no : ', port);
});