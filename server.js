var express = require('express'),
    app = express(),
    port = process.env.PORT || 4005,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./utils/routes');
routes(app);

app.listen(port);
console.log('Api jalan di port : ' + port);