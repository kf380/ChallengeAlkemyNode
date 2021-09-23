const { Router } = require("express");
const {
    sendEmail,
  } = require("../controllers/mailControllers");

const router = Router();

router.post("/api/mail", sendEmail)


module.exports = router;