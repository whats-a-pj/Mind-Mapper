//const router = require('express').Router();

//require/import all routes inside ./api here || ex. const userRoutes = require('./userRoutes');

//router.use('/userRoutes', userRoutes);

//module.exports = router;

const router = require('express').Router();
const profileRoutes = require('./userRoutes');
const mindMapRoutes = require('./mindMapRoutes'); //update

router.use('/user', profileRoutes);
router.use('/mindMaps', mindMapRoutes);

module.exports = router;