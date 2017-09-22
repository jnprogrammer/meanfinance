//Pull Request Testing
//var apiKey = Ug5F7RzSzxgwD2PBxCMm

// $(document).ready(function(){
//   $("getStockInfo").click(function(){
//     var url= curl "https://www.quandl.com/api/v3/datasets/WIKI/FB.json?api_key=Ug5F7RzSzxgwD2PBxCMm";
  
//   $.ajax(url: url),
  
//   iWork: function(response){
//     $("#name").html(dataset.database_code);
//     $("#description").html(dataset.description);
//     $("#newest_available_date").html(dataset.newest_available_date);
//     console.log("It's Aliiiiive!");
//   }
    
    
    
    
//   });
  
  
  
// })



require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.set('port', process.env.PORT);

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/api', routes);

var server = app.listen(app.get("port"), function() {
  var port = server.address().port;
  console.log("CDFinance is running on port " + port);
});