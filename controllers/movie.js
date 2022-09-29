
const Movie = require('../models/movies')
const ctrl = {

    //get movies details
    getMovies: async (req, res) => {
        try {
            const movies = await Movie.find();
            return res.status(200).json({
                message: 'success',
                data: movies,
            })
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    //add new movie details
    addMovie: async (req, res) => {
        try {
            const movies = await Movie.create(req.body);
            res.status(201).json({
                message: "movies saved successfully",
                data: movies,
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    },

    //delete movie
    deleteMovie: async (req, res) => {
        const id = req.params.id;
        try {
            const movie = await Movie.findOneAndDelete({ _id: id });
            res.status(200).json({ message: 'successfully deleted' })
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

    //update Movie
    updateMovie: async (req, res) => {
        const id = req.params.id;
        try {
            const movie = await Movie.findByIdAndUpdate({ _id: id }, req.body);
            if (!movie) {
                return res.status(404).json({ error: "Movie not found" })
            }
            res.status(201).json({
                messsage: 'updated successfully',
                data: movie
            })
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

module.exports = ctrl;