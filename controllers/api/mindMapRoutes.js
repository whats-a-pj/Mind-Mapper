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

router.get('./mindmap/:id', async (req, res) => {
    const codeSnippetsData = await MindMap.findByPk(req.params.id, {
        include: [
            {
                model: User, 
                attributes: ['codesnippets'] //change based on codesnippet file ?
            }
        ]
    })
    const codesnippets = codeSnippetsData.get({ plain: true });
    res.render('codesnippets', {
        ...codesnippets,
        logged_in: req.session.logged_in
    });
})


//routes to get notes/packages/proj questions/resources/user story with get/put/post/delete

module.exports = router;

