const express = require('express'),
    bodyParser = require('body-parser'),
    PG = require('redstar-pg'),
    LOGIN = require('redstar-login-server'),
    CONFIG = require('./server/config'),
    checkUser = require('./server/user'),
    api = require('./server/api'),

    app = express();

PG.setConfig(CONFIG.DATABASE_URL);
LOGIN.setConfig(checkUser);

app.set('port', (process.env.PORT || 4000));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

api(app);

app.get('/', (req, res) => res.end('This is API test server for White Crow Project. @RedStar'));

app.listen(app.get('port'), () => {console.log('Server is starting on port ' + app.get('port'))});