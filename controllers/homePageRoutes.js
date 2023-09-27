const router = require('express').Router(); 
const { MindMap, User } = require('../models');
const withAuth = require('../utils/auth');

// if logged in redirect back to dash
// test section

router.get('./', async (req, res) => {
	try {
		const mindMapData = await MindMap.findAll({
			include: [{	model: User}]
		});
		console.log(mindMapData)



	} catch (err) {
		res.status(500).json(err);
	}
});

//should route to dashboard after login
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
					attributes: ['mindmap'] //may need to update
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
// may need to add var in our js file to assign the ID's to the mindmap title etc 
router.get('./mindMap/:id', async (req, res) => {
	const mindMapDataById = await User.findByPk(req.params.id, {
		
		include: [
			{
				model: User,
				attributes: ['mindmap'] // may change based on seeds file 
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

router.get('/codesnippets', withAuth, async (req, res) => {
    try {
        const codeSnips = await MindMap.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: User }]
        })

        const codeSnippetsData = codeSnips.get({ plain: true });

        res.render('codesnippets', {
            ...codeSnippetsData,
            logged_in: true
        })
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router;