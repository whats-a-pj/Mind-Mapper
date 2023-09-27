const router = require('express').Router();
const { MindMap, User } = require('../../models');
const withAuth = require('../../utils/auth');

//router tests
router.get('/', async (req, res) => {
    try {
        const mindMapData = await MindMap.findAll({
            include: [{ model: User }]
        });
        // console.log(mindMapData)
        res.status(200).json(mindMapData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const mindMapbyId = await MindMap.findByPk(req.params.id, {
            include: [{ model: User }]
        });

        if (!mindMapbyId) {
            // console.log(mindMapbyId)
            res.status(404).json({ message: 'Not found.' });
            return;
        }
        res.status(200).json(mindMapbyId);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteMindMap = await MindMap.destroy({
            where: { id: req.params.id }
        });
        if (!deleteMindMap) {
            res.status(404).json({ message: 'mindmap not found.' });
            return;
        }
        res.status(200).json(deleteMindMap);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newMindMap = await MindMap.create(req.body);
        console.log(newMindMap)
        res.status(200).json(newMindMap);
    } catch (err) {
        res.status(500).json(err);
    }

})

router.put('/:id', (req, res) => {
    MindMap.update(
        {
            id: req.body.id,
            title: req.body.title,
            acceptance_criteria: req.body.acceptance_criteria,
            pkg_name: req.body.pkg_name,
            note: req.body.note,
            snippet: req.body.snippet,
            wireFrame_link: req.body.wireFrame_link,
            resourse_name: req.body.resourse_name,
            user_id: req.body.user_id
        },
        {
            where: {
                id: req.params.id,
            }
        }
    )
        .then((updatedMindMap) => {
            res.json(updatedMindMap)
        })
        .catch((err) => {
            console.log(err)
            res.json(err);
        })
})


// router tests

// pull all maps by user if there are multiple
// router.get('./', async (req, res) => {
// 	try {
// 		const allMindMpaData = await MindMap.findAll({
// 			// include: [{ Model: User }]
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
