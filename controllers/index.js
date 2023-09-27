const router = require('express').Router();
const apiRoutes = require('./api');
const homePageRoutes = require('./homePageRoutes');
require('express-session');


router.use('/', homePageRoutes);
router.use('/api', apiRoutes);

module.exports = router;
