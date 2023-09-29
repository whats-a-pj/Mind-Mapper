//express requirements
const path = require('path');
const routes = require('./controllers');
const express = require('express');
const session = require('express-session');

//security requirements- dunno if we need these here or just in their required files
// const dotenv = require('dotenv');
// const bcrypt = require ('bcrypt');
// const uuid = require('uuidv4');

//handlebars requirements
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

//handlebars helpers
const hbs = exphbs.create({ helpers });

//this is for session storage/security and setting up cookies
const sess = {
  secret: 'Change me sometimes',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

//setting the view engine with handlebars and express
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, "0.0.0.0", () => console.log(`Now listening- check http://localhost:${PORT}`));
});