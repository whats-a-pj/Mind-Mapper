const router = require('express').Router();
const {  User, MindMap } = require('../../models');


// //test section
router.get('/', async (req, res) => {
    try {
        const mindMapData = await User.findAll({
            include: [{ model: MindMap }]
        });
        console.log(mindMapData)



    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const userInput = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userInput.id;
            req.session.logged_in = true;

            res.status(200).json(userInput);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userLogin = await User.findOne({ where: { email: req.body.email } });

        if (!userLogin) {
            res
                .status(400)
                .json({ message: 'Invalid login in information.' });
            return;
        }

        const validPassword = userLogin.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Invalid login in information.' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userLogin.id;
            req.session.logged_in = true;

            res.json({ user: userLogin, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
