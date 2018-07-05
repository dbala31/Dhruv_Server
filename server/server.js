const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const users = require('./Routes/API/users');
const profile = require('./Routes/API/profile');
const posts = require('./Routes/API/posts');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = require('./config/Keys').mongoURI;

mongoose
    . connect(db)
    . then (() => console.log('MongoDB Connected'))
    . catch(err => console.log(err));

app.get('/', (req, res) => res.send('Dhruv Is A GOD'));

app.use('/API/users', users);
app.use('/API/profile', profile);
app.use('/API/posts', posts);

const port = process.env.PORT || 5000;


// To display values of variables to display we use back ticks (ES6)
app.listen(port, () => console.log(`Server running on port ${port}`));