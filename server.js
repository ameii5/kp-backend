const express = require('express'),
      mysql = require('mysql'),
    //   port = process.env.PORT || 3000,
      bodyParser = require('body-parser');
    //   controller = require('./controller');

var app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection ({
    host : "localhost",
    user : "root",
    password : "root",
    database : "namadatabase",
    multipleStatements : true
});

mysqlConnection.connect((err)=>{
    if(!err)
        {
            console.log("Connected");
        }
    else
        {
            console.log("Connection Failed!");
        }
})

// var routes = require('./routes');
// routes(app);

// app.listen(3000);
// console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);

module.exports = app;