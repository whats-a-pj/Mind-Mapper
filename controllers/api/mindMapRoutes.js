const router = require('express').Router();
const { MindMap, User } = require('../../models');
const withAuth = require('../../utils/auth');

//router tests

// pull all maps by user if there are multiple

router.get('/', withAuth, async (req, res) => {
    try {
        const allMindMpaData = await MindMap.findAll({
            include: [{ model: User }]
        });
        const userMindMap = allMindMpaData.map((mindMap) =>
            mindMap.get({ plain: true })
        );
        res.render('dashboard', {
        	...userMindMap,
        	logged_in: req.session_logged_in
        });
      
        res.status(200).json(allMindMpaData);
    } catch (err) {

        res.status(500).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const packagesData = await MindMap.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    include: 'name'

                }
            ]
        })
        const packages = packagesData.get({ plain: true });
        res.render('dashboard', {title}, {
            ...packages,
            logged_in: req.session.logged_in
        });
        //need to re-verify this route after pages build to make sure we can pull that specific mindmap
        res.status(200).json(packagesData)
    } catch (err) {
        // console.error(err)
        res.status(500).json(err)
    }
})

router.post('/', withAuth, async (req, res) => {
    try {
        const newMindMap = await MindMap.create(req.body);
        const postNew = newMindMap.get({ plain: true });
        res.render('dashboard', title, {
            ...postNew,
            logged_in: req.session.logged_in
        });
        //confirmed working, need to re-verify route once pages finished
        //page should allow the creation of a new MM

        res.status(200).json(newMindMap);
    } catch (err) {
        res.status(500).json(err);
        console.error(err)
    }

})

router.put('/:id', withAuth, async (req, res) => {

    try {
        const updatedMindMap = await MindMap.update(
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

            })
        const updateMm = updatedMindMap.get({ plain: true });
        res.render('dashboard', { title }, {
            ...updateMm,
            logged_in: req.session.logged_in

        // code confirmed working, need to double check once page is built.
    })
        res.status(200).json(updatedMindMap);
        } catch (err) {
            res.status(500).json(err);
            console.error(err)
        }

});


router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deleteMindMap = await MindMap.destroy({
            where: { id: req.params.id }
        });
        if (!deleteMindMap) {
            res.status(404).json({ message: 'mindmap not found.' });
            return;
        }
        //double check if working with insomnia
        res.status(200).json(deleteMindMap);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
