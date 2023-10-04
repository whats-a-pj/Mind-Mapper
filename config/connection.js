//require .env & sequelize
// const Sequelize = require('sequelize');
// require('dotenv').config();

//host & port with process.env.db_name, db_user, db_password

//module.exports = sequelize;

const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.MYSQL_URL) {
    sequelize = new Sequelize(process.env.MYSQL_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: '127.0.0.1',
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelize;
