const express = require("express");
// cors
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const shortenRoute = require('./routes/shorten.route');
// bring in keys.js
const db = require("./config/keys");

const port = process.env.PORT || 3000;

const corsOptions = {
    origin: `http://localhost:${port}`,
    optionsSuccessStatus: 200
};
//connect to mongoose
mongoose.connect(db.mongoURI, db.mongoSetup)
    .then(() => console.log("MongoDb connected..."))
    .catch(err => console.log(err));

app.use(express.json());
app.use(cors(corsOptions));

app.use('/', shortenRoute);

app.listen(port, (() => console.log(`server started on port ${port}`)));
