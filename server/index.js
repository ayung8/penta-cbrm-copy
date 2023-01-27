// common js modules for server side
// node js run time only has support for
// common js modules.
const express = require('express');
const mongoose = require('mongoose');
/* Give Express access to cookies using a helper library */
const cookieSession = require('cookie-session');
// const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

// this is our MongoDB database
const dbRoute = keys.mongoURI;

// connects our back end code with the database
mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

// app.get('/', (req,res)=>{
//     res.send({hi: 'bye'});
// });
// app.use(passport.initialize());
// app.use(passport.session());

const user = require('./routes/userRoutes');
const email = require('./routes/emailRoutes');
const client = require('./routes/clientRoutes');
// require('./routes/billingRoutes')(app);
// require('./routes/surveyRoutes')(app);

app.use('/api/user', user);
app.use('/api/email', email);
app.use('/api/client', client);

if (process.env.NODE_ENV === 'production') {
    // express will serve up production assets
    // i.e., main.js and main.css
    app.use(express.static('client/build'));

    //Express will serve up the index.html file
    // if it doesn't recognize the file
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5001;

// // launch our backend into a port
app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
