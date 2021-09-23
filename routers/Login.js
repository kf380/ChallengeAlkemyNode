const {Router} = require("express");

const { getLogin} = require ("../controllers/loginControllers")

const router = Router();

router.post("/", getLogin)


module.exports = router;
