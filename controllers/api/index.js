const router = require('express').Router();
const userRoutes = require('./userRoutes');
const mindMapRoutes = require('./mindMapRoutes'); 

router.use('/users', userRoutes);
router.use('/mindmaps', mindMapRoutes);

module.exports = router;