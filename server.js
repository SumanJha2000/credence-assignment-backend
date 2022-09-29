
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const movieroute = require('./routes/movie.js')
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

//mongoose connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('mongoose connected successfully'))
    .catch(err => console.log(err));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(movieroute)

//server listening
app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
})

