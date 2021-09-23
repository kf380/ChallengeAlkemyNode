const { Router } = require("express");
const {
  getCharacters,
  getQueryCharacters,
  updateCharacter,
  createCharacter,
  deleteCharacter,
  getCharactersByNameImage
} = require("../controllers/characterControllers");
const { Character } = require("../db")
const router = Router();

router.put("/:id", updateCharacter);
router.post("/", createCharacter);
router.delete("/:id", deleteCharacter);
router.get("/", getCharacters);
router.get("/characters", getQueryCharacters)
router.get("/characters1", getCharactersByNameImage)
// router.get("/:age", getCharactersByIdMovie)

module.exports = router;
