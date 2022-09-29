const express = require('express')
const router = express.Router();
const ctrl = require('../controllers/movie')

router.get('/', ctrl.getMovies);
router.post('/add', ctrl.addMovie);
router.delete('/:id', ctrl.deleteMovie);
router.put('/:id', ctrl.updateMovie);

module.exports = router;