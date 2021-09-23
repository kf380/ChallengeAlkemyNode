const { Router } = require("express");
const {User} = require ("../db");
const {createUser} = require ('../controllers/userControllers.js')
const {getUser} = require ('../controllers/userControllers.js')
const router = Router();
const bcrypt = require('bcrypt')


router.post("/", createUser)
router.get("/", getUser)


module.exports = router;
