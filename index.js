var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    passport = require('passport');

var locationCtrl = require('./controllers/locationCtrl'),
    catCtrl = require('./controllers/catCtrl'),
    adCtrl = require('./controllers/adCtrl'),
    peopleCtrl = require('./controllers/peopleCtrl');

var config = require('./config/config.js');

var app = express();

app.use(cors());
app.use(session({
  secret: config.secret
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.post('/location', locationCtrl.create);
app.get('/location', locationCtrl.read);
app.put('/location/:id', locationCtrl.update);
app.delete('/location/:id', locationCtrl.delete);

app.post('/cat', catCtrl.create);
app.get('/cat', catCtrl.read);
app.put('/cat/:id', catCtrl.update);
app.delete('/cat/:id', catCtrl.delete);

app.post('/ad', adCtrl.create);
app.get('/ad', adCtrl.read);
app.put('/ad/:id', adCtrl.update);
app.delete('/ad/:id', adCtrl.delete);

app.post('/people', peopleCtrl.create);
app.get('/people', peopleCtrl.read);
app.put('/people/:id', peopleCtrl.update);
app.delete('/people/:id', peopleCtrl.delete);

var mongoUri = "mongodb://localhost:27017/militarySwap";
mongoose.connect(mongoUri);
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});

app.listen(config.port, function(){
  console.log("listening to port " + config.port);
});
