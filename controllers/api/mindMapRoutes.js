const router = require('express').Router();
const { MindMap, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('./', async (req, res) => {
    try {
        const mindMapData = await MindMap.findAll({
            include: [{ model: User }]
        });
        console.log(mindMapData)



    } catch (err) {
        res.status(500).json(err);
    }
});


//pull all maps by user if there are multiple
// router.get('./', async (req, res) => {
// 	try {
// 		const allMindMpaData = await MindMap.findAll({
// 			include: [{ Model: User }]
// 		});
// 		const userMindMap = allMindMpaData.map((mindMap) =>
// 			mindMap.get({ plain: true })
// 		);
// 		res.render('dashBoard', {
// 			...userMindMap,
// 			logged_in: req.session_logged_in
// 		});
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });
// //pull for just the specific map
// router.get('./mindmap/:id', async (req, res) => {
//     const codeSnippetsData = await MindMap.findByPk(req.params.id, {
//         include: [
//             {
//                 model: User, 
//                 attributes: ['name'] 
//             }
//         ]
//     })
//     const codesnippets = codeSnippetsData.get({ plain: true });
//     res.render('codesnippets', {
//         ...codesnippets,
//         logged_in: req.session.logged_in
//     });
// })

// router.get('./mindmap/:id', async (req, res) => {
//     try {
//     const packagesData = await MindMap.findByPk(req.params.id, {
//         include: [
//             {
//                 model: User,
//                 attributes: packagesData.title
//             }
//         ]
//     })
//     const packages = packagesData.get({ plain: true });
//     res.render('codesnippets', {title}, { // not sure this will pull pending testing
//         ...packages,
//         logged_in: req.session.logged_in
//     });
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })


//routes to get notes/packages/proj questions/resources/user story with get/put/post/delete

module.exports = router;

