//require express
// require ALL models
// get and render() routes here

//module.exports = router

const router = require('express').Router(); 
const { TODO, USERTODO } = require('../models'); //REPLACE TODO WITH ACTUAL MODELS THEN UPDATE MODELS BELOW
const withAuth = require('../utils/auth');

// if logged in redirect back to dash
router.get('/login', (req, res) => {

    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});


module.exports = router;

//find all mindmaps - not sure if we want a search all, or if we would rather just have a find all by user after login
// can also work in all of the get functions with withAuth to make any action require a login/create login
router.get('./', async (req, res) => {
	try {
		const mindMapData = await TODO.findAll({
			include: [
				{
					model: TODO,
					attributes: ['name'] //may need to update based on model data and seeds data
				}
			]
		});

		const userMindMap = mindMapData.map((mindMap) =>
			mindMap.get({ plain: true })
		);

		res.render('dashBoard', {

			userMindMap,
			logged_in: req.session.logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});
// will need to add var in our js file to assign the ID's to the mindmap title etc 
router.get('./mindMap/:id', async (req, res) => {
	const mindMapDataById = await USERTODO.findByPk(req.params.id, {
		//replace USERTODO
		include: [
			{
				model: USERTODO,
				attributes: ['name'] //may also req change
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
    const userProfile = await TODOUSER.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{model: TODO}]
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
