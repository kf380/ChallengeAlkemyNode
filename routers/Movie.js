const { Router } = require("express");
const {
    getMovies,
    updateMovie,
    createMovie,
    deleteMovie,
    getQueryMovie,

} = require ("../controllers/movieControllers")
const {Movie} = require ("../db")
const router = Router ();


router.put("/:id", updateMovie)
router.post("/", createMovie)
router.delete("/:id",deleteMovie)
router.get("/", getMovies)
router.get("/movie", getQueryMovie)

module.exports = router;