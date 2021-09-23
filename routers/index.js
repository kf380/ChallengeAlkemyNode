const {Router} = require ('express');
const CharacterRoutes = require('./Character')
const MovieRoutes = require('./Movie')
const UserRoutes = require('./User')
const LoginRoutes = require('./Login')
const GenreRoutes = require('./Genre')
const MailRoutes = require('./Mail')
const router = Router();


router.use('/character',CharacterRoutes);
router.use('/movie',MovieRoutes);
router.use('/user',UserRoutes);
router.use('/login',LoginRoutes);
router.use('/genre',GenreRoutes);
router.use('/mail',MailRoutes);

module.exports = router;
