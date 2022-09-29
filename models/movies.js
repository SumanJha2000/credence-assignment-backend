const mongoose = require('mongoose');

const MoviesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    img: {
        type: String,
        required: true,
    },

    summary: {
        type: String,
        required: true,
    }
},
    { timestamsps: true }
)

const Movie = mongoose.model('Movie', MoviesSchema);
module.exports = Movie;