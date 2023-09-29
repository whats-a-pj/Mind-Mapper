const router = require('express').Router(); 
const { MindMap, User } = require('../models');
const withAuth = require('../utils/auth');

router.post('/login', async (req, res) => {
    try {
        const mindMapData = await MindMap.findAll({
            include: [{ model: User }]
        });
		console.log(mindMapData)
		res.render('dashboard')



    } catch (err) {
        res.status(500).json(err);
    }
});



router.get('/', async (req, res) => {
	try {
		const mindMapData = await User.findAll({
			include: [
				{
					model: MindMap
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
		console.error(err)
		res.status(500).json(err);
	}
});
// router.get('/mindMap/:id', async (req, res) => {
// 	const mindMapDataById = await User.findByPk(req.params.id, {
		
// 		include: [
// 			{
// 				model: User,
// 				attributes: ['mindmap'] // may change based on seeds file 
// 			}
// 		]
// 	});
// 	const mindMapDataByIData = mindMapDataById.get({ plain: true });
// 	res.render('mindmap', {
// 		...mindMapDataByIData,
// 		logged_in: req.session.logged_in
// 	});
// });


router.get('/dashboard', withAuth, async (req, res) => { 
    try {
		const userProfile = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{model: MindMap}]
    })
    
    const profileData = userProfile.get({ plain: true });
    
    res.render('mindmap', { 
        ...profileData, 
        logged_in: true
    })
    } catch (err) {
        res.status(500).json(err)
    }
})
router.get('/login', (req, res) => {
	if (req.session.logged_in) {
		res.redirect('/dashboard');
		return;
	}

	res.render('login');
});


router.get('/projectquestions', withAuth, async (req, res) => {
    try {
        const codeSnips = await MindMap.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: User }]
        })

        const codeSnippetsData = codeSnips.get({ plain: true });

        res.render('projectquestions', {
            ...codeSnippetsData,
            logged_in: true
        })
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router;