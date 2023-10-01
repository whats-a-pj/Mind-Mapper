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

        res.status(200).json(packagesData)
    } catch (err) {
        // console.error(err)
        res.status(500).json(err)
    }
})

router.post('/', withAuth, async (req, res) => {
    try {
        const newMindMap = await MindMap.create({
            ...req.body,
            user_id: req.session.user_id,
        });


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
                note: req.body.note,
                wireFrame_link: req.body.wireFrame_link,
                user_id: req.body.user_id
            },
            {
                where: {
                    id: req.params.id,
                }

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

        res.status(200).json(deleteMindMap);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
