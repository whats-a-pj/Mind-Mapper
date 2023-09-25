const router = require('express').Router(); 
const { MindMap, User } = require('../models');
const withAuth = require('../utils/auth');

// if logged in redirect back to dash
router.get('/login', (req, res) => {

    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});


//pulling all user mindmaps
router.get('./', async (req, res) => {
	try {
		const mindMapData = await MindMap.findAll({
			include: [
				{
					model: MindMap,
					attributes: ['mindMap'] //may need to update
				}
			]
		});

		const userMindMap = mindMapData.map((mindMap) =>
			mindMap.get({ plain: true })
		);

		res.render('dashboard', {

			userMindMap,
			logged_in: req.session.logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});
// will need to add var in our js file to assign the ID's to the mindmap title etc 
router.get('./mindMap/:id', async (req, res) => {
	const mindMapDataById = await User.findByPk(req.params.id, {
		
		include: [
			{
				model: User,
				attributes: ['mindMap'] //may also req change
			}
		]
	});
	const mindMapDataByIData = mindMapDataById.get({ plain: true });
	res.render('mindmap', {
		...mindMapDataByIData,
		logged_in: req.session.logged_in
	});
});


router.get('/dashboard', withAuth, async (req, res) => { 
    try {
		const userProfile = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{model: MindMap}]
    })
    
    const profileData = userProfile.get({ plain: true });
    
    res.render('dashboard', { 
        ...profileData, 
        logged_in: true
    })
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router;