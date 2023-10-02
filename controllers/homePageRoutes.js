const router = require('express').Router(); 
const { MindMap, User } = require('../models');
const withAuth = require('../utils/auth');




router.get('/', async (req, res) => {
	try {
		const mindMapData = await MindMap.findAll({
			include: [
				{
					model: User,
					
				}
			]
		});
		console.log(mindMapData)

		const userMindMap = mindMapData.map((mindMap) =>
			mindMap.get({ plain: true })
		);

		res.render('login', {

			userMindMap,
			logged_in: req.session.logged_in
		});
	} catch (err) {
		console.error(err)
		res.status(500).json(err);
	}
});
router.get('/mindmaps/:id', async (req, res) => {
	const mindMapDataById = await MindMap.findByPk(req.params.id, {
		
		include: [
			{
				model: User,
				attributes: ['name'] // may change based on seeds file 
			}
		]
	});
	const mindMapDataByIData = mindMapDataById.get({ plain: true });
	res.render('dashboard', {
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
        // console.log(userProfile)
    const profileData = userProfile.get({ plain: true });
    
    res.render('dashboard', { 
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

// these post routes are *supposed to* take the users input from project 
// questions and add it to the hidden divs in dashboard


router.post('/submitTitle', (req, res) => {
    const inputTitle = req.body.input;
	//do something here to store inputTitle to MindMap model
    res.redirect('/renderTitle');
});

router.get('/renderTitle', withAuth, async (req, res) => {
    try {
        const showTitle = await MindMap.findOne(req.session.user_id, {
            include: [{ 
				model: MindMap,
				attributes: ['title'] 
			}]
        })

        const inputTitleData = showTitle.get({ plain: true });

        res.render('/renderTitle', {
            ...inputTitleData,
            logged_in: true
        })
		res.redirect('/dashboard')
    } catch (err) {
        res.status(500).json(err)
    }
})

// router.post('/submitTitle', (req, res) => {
//     const inputTitle = req.body.input;
// 	//do something here to add it to database??
//     res.redirect('/renderTitle');
// });

// router.get('/renderTitle', (req, res) => {
// 	const render = 
// })

router.get('/submitUserStory', (req, res) => {
    const userStory = req.body.input;
    res.render('output', { userStory });
});

router.get('/submitNotes', (req, res) => {
    const notes = req.body.input;
    res.render('output', { notes });
});

router.get('/submitWireframe', (req, res) => {
    const wireFrame = req.body.input;
    res.render('output', { wireFrame });
});

module.exports = router;