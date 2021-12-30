const express = require("express");
const mysql = require("mysql");
var fs = require('fs');
var cors = require('cors');
var async = require('async');
var http = require('http');
const port = process.env.PORT || 8081;
const app = express();
var server = http.createServer(app);
const {google} = require("googleapis");
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
});
app.use(cors({origin: '*'}));
app.use(express.static("../JSON",{etag: false})); // exposes index.html, per below

db.connect((err) => {
  if(err){
    console.log("database not connected");
  }
  console.log("database connected")
});



server.listen(port,() => console.log(`running on ${port}`));
