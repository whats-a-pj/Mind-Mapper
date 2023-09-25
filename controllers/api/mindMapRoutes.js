const router = require('express').Router();
const { MindMap, User } = require('../../models');
const withAuth = require('../../utils/auth');

//pull all maps by user
router.get('./', async (req, res) => {
	try {
		const allMindMpaData = await MindMap.findAll({
			include: [{ Model: User }]
		});
		const userMindMap = allMindMpaData.map((mindMap) =>
			mindMap.get({ plain: true })
		);
		res.render('dashBoard', {
			...userMindMap,
			logged_in: req.session_logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});


module.exports = router;

router.get('./', async (req, res) => {
    try {
        const allMindMpaData = await MindMap.findAll({
            include: [{ Model: User }]
        });
        const userMindMap = allMindMpaData.map((mindMap) =>
            mindMap.get({ plain: true })
        );
        res.render('dashBoard', {
            ...userMindMap,
            logged_in: req.session_logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//routes to get notes/packages/proj questions/resources/user story with get/put/post/delete
module.exports = router;

