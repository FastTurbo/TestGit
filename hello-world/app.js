/**
 * Created by Administrator on 2015/7/23.
 */
var express = require('express');
var app = express();

app.get('/hello.txt',function(req,res){
    res.send('Hello world!');
});

//view engine
app.set('views','./views');
app.set('view engine','jade');

app.engine('jade',require('jade').__express);

//route
app.get('/',function(req,res){
    res.render('index',{title:'hey',message:'Hello there!'});
});



var server = app.listen(3000,function(){
    console.log('Listening on port %d',server.address().port);
});