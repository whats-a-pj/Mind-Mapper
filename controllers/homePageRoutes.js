const router = require('express').Router(); 
const { MindMap, User } = require('../models');
const withAuth = require('../utils/auth');
require('express-session');

// if logged in redirect back to dash
// test section


router.post('/login', (req, res) => {

    if (req.session.logged_in) {
        res.redirect('/login');
        return;
	}
	res.render('dashboard');

});




// TODO FIGURE OUT WHY IT'S ONLY RENDERING THE LOGIN AFTER LOGGING IN



//pulling all user mindmaps
router.post('/dashboard', async (req, res) => {
	try {
		const mindMapData = await MindMap.findAll({
			include: [
				{
					model: User,
					attributes: ['mindmap'] //may need to update
				}
			]
		});

		const userMindMap = mindMapData.map((mindMap) =>
			mindMap.get({ plain: true })
		);

		res.render('mindmap', {

			userMindMap,
			logged_in: req.session.logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});
// // may need to add var in our js file to assign the ID's to the mindmap title etc 
// router.get('./mindMap/:id', async (req, res) => {
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


// router.get('/dashboard', withAuth, async (req, res) => { 
//     try {
// 		const userProfile = await User.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//         include: [{model: User}]
//     })
    
//     const profileData = userProfile.get({ plain: true });
    
//     res.render('dashboard', { 
//         ...profileData, 
//         logged_in: true
//     })
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

// router.get('/codesnippets', withAuth, async (req, res) => {
//     try {
//         const codeSnips = await MindMap.findByPk(req.session.user_id, {
//             attributes: { exclude: ['password'] },
//             include: [{ model: User }]
//         })

//         const codeSnippetsData = codeSnips.get({ plain: true });

//         res.render('codesnippets', {
//             ...codeSnippetsData,
//             logged_in: true
//         })
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })



module.exports = router;