const express = require('express');
const moongose = require('mongoose');
const config = require('config');

const app = express();

//BodyParser Middleware
app.use(express.json());

//DB Config

const db = config.get('mongoURI');

//Connect to MongoDB

moongose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        console.log("Mongo Connected");
    })
    .catch(err => {
        console.log(err);
    });

// Use Routes

app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))



