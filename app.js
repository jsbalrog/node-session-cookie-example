var express = require('express');
var app = express();
var errorHandlers = require('./middleware/errorhandlers');
var routes = require('./routes');
var partials = require('express-partials');
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(session({ secret: 'G|4n<F7tL}0L8L4052|82$0`W1?N8)', cookie: { httpOnly: false } })); // secret is used to create a hash of our session id
app.use(partials());
app.set('view options', { defaultLayout: 'layout' });
app.get('/', routes.index);

app.use(errorHandlers.error);
app.use(errorHandlers.notFound);

app.listen(3000);
console.log('App server running on port 3000');