const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve all files in the same directory as the server.js file
app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.post('/submit', function (req, res) {
  console.log(req.body);
  res.send(`<html><body><h1>Information received:</h1><p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Message: ${req.body.message}</p></body></html>`);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
