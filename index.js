var express = require('express');
const connectDb = require('./config/db');
var app = express();
var cors = require('cors');



connectDb();


app.use(express.json({ extended: false }));
app.use(cors());
//app.post('/', function (req, res) {
app.get("/url", cors(), (req, res, next) => {

    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});



app.post("/url/post", cors(), (req, res) => {
    var user_id = req;


    res.send(user_id);
})

app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

var server = app.listen(2023, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
})