const express = require('express');
const app = express();
const port = 3000;

var bodyParser = require('body-parser');
var toIsoString = require('./date.js')
var query_function = require('./query_function.js');
const { list_transaction } = require('./query_function.js');

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.get('/', (req, res) => {
  res.write('Hello World! ');
  con.query("SELECT * FROM account", function (err, result, fields) {
    if (err) throw err;
    result = JSON.parse(JSON.stringify(result));
    console.log(result);
    res.write(result[0].username);
    res.end();
  });
});

app.post('/opened', (req, res) => {
  console.log("Received post to /opened " + new Date().toIsoString().slice(0, 19).replace('T', ' '));
  console.log(req.body);
  res.send(req.body);

  query_function.check_user_exist(req.body.referred_by)
    .then((result) => query_function.insert_clicked_record(result))
    .catch(() => console.log("Link cannot be found. User does not exist."))
});

app.post('/transactionCompleted', (req, res) => {
  console.log("Received post to /transactionCompleted " + new Date().toIsoString().slice(0, 19).replace('T', ' '));
  console.log(req.body);
  res.send(req.body);

  query_function.check_user_exist(req.body.referred_by)
    .then((result) => query_function.insert_completed_transaction_record(result, req.body.order_number))
    .catch(() => console.log("Link/user does not exist. Cannot insert transaction"))

});

app.get('/transaction_amount/:username', function (req, res) {
  console.log(query_function.list_transaction(req.params.username))
  res.send(query_function.list_transaction(req.params.username));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(new Date().toIsoString().slice(0, 19).replace('T', ' '))
});