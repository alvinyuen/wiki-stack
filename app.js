const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-Parser');
const morgan = require('morgan');
const path = require('path');

const PORT = 3000;


app.use(morgan('dev'));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
var env = nunjucks.configure('views', {noCache: true});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//static files
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
	res.render('index');
});


app.listen(PORT, () => {
	console.log(`LISTENING ON ${PORT}`);
});