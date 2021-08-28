var dbConfig = {
    client: 'mysql',
    connection: {
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'crud-node'
    }
  };
  var express = require('express');                       // call express
  var bodyParser = require('body-parser');                // call body-parser
  var knex = require('knex')(dbConfig);                   // set up database connection
  var app = express();                                    // define our app using express
  app.use(bodyParser.urlencoded({ extended: true }));     // configure app to use bodyParser() 
  app.use(bodyParser.json());                             // this will let us get the data from a POST
  var router = express.Router();                          // get an instance of the express Router
  router.use(function(req, res, next) {                   // middle ware for authentication
      console.log(' -Logging- ');
      next();                                             // continue to next route without stopping
  });
  router.get('/', function(req, res) {                    // listen for a post on root
      res.json({ message: ' -Success- ' });   
  });
  router.route('/pokemon')                                  // set up user route
      .post(function(req, res) {                            // listen for a post on user
          console.log(' -Post -');                          // report a post
          knex('pokemon').insert({email: req.body.email});  // insert user into user table
          res.json({ success: true, message: 'ok' });       // respond back to request
      });
  app.use('/api', router);                                // register routes beginning with /api  
  var port = process.env.PORT || 8080;                    // set server port number
  app.listen(port);                                       // setup listener
  console.log('Magic happens on port ' + port);           // report port number chosen