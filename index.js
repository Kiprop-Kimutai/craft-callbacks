const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./endpoints/index');
app.use(bodyParser.json({urlencoded: true}));
// app.use('/api/v1', routes);

app.post('/api/v1/b2c/result', function(req, res) {
    console.log('-----------B2C CALLBACK------------');
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');
  
    var message = {
      "ResponseCode": "00000000",
      "ResponseDesc": "success"
    };
  
    res.json(message);
  });
  
  // B2C QueueTimeoutURL - /api/v1/b2c/timeout
  app.post('/api/v1/b2c/timeout', function(req, res) {
    console.log('-----------B2C TIMEOUT------------');
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');
  
    var message = {
      "ResponseCode": "00000000",
      "ResponseDesc": "success"
    };
  
    res.json(message);
  });
  
  // C2B ValidationURL - /api/v1/c2b/validation
  app.post('/validation', function(req, res) {
    console.log('-----------C2B VALIDATION REQUEST-----------');
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');
  
    var message = {
      "ResultCode": 0,
      "ResultDesc": "Success",
      "ThirdPartyTransID": "1234567890"
    };
  
    res.json(message);
  });
  
  // C2B ConfirmationURL - /api/v1/c2b/confirmation
  app.post('/confirmation', function(req, res) {
    console.log('-----------C2B CONFIRMATION REQUEST------------');
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');
  
    var message = {
      "ResultCode": 0,
      "ResultDesc": "Success"
    };
  
    res.json(message);
  });
  
  // B2B ResultURL - /api/v1/b2b/result
  app.post('/b2b/result', function(req, res) {
    console.log('-----------B2B CALLBACK------------');
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');
  
    var message = {
      "ResponseCode": "00000000",
      "ResponseDesc": "success"
    };
  
    res.json(message);
  });
  
  
  // B2B QueueTimeoutURL - /api/v1/b2b/timeout
  app.post('/b2b/timeout', function(req, res) {
    console.log('-----------B2B TIMEOUT------------');
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');
  
    var message = {
      "ResponseCode": "00000000",
      "ResponseDesc": "success"
    };
  
    res.json(message);
  });
  
// console.log("Server listening on port: 8310")
// app.listen(8310);
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`server listening on port ${server.address().port}`);
});