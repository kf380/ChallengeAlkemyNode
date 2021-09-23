const { Router } = require("express");
const {
    getGenre,
    updateGenre,
    createGenre,
    deleteGenre,

} = require ("../controllers/genreControllers")
const {Genre} = require ("../db")
const router = Router ();


router.put("/:id", updateGenre)
router.post("/", createGenre)
router.delete("/:id",deleteGenre)
router.get("/", getGenre)


module.exports = router;