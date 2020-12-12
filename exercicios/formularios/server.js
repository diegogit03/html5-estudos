const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/usuarios', (req, res) => {
	console.log(req.body);
	res.send('<h1>Parabéns. Usuario Incluído<h1>');
});

app.post('/usuarios/:id', (req, res) => {
	console.log(req.body);
	console.log(req.params);
	res.send('<h1>Parabéns. Usuario Alterado<h1>');
})

app.listen(3333);
