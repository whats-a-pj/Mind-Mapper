const router = require('express').Router();
const apiRoutes = require('./api');
const homePageRoutes = require('./homePageRoutes');

router.use('/', homePageRoutes);
router.use('/api', apiRoutes);

module.exports = router;
