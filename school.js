var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    config = require('./config/config.json');

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Method', "GET, PUT, POST, DELETE");
    res.header('Access-Control-Allow-Headers','Content-Type, Accept');
    next();
})

app.listen(config.PORT, function(err){
    if(err){
        console.log("Err", err);
    } else {
        console.log("server conected on PORT", config.PORT);
    }
})

app.use(bodyParser.json());

app.get('/test')
app.use('/', require('./routes'));