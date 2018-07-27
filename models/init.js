const Sequelize = require('sequelize');
const sequelize = new Sequelize(null, null, null, {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './db.sqlite3',
});

sequelize
    .authenticate()
    .catch(err => {
        console.error("Unable to connect to database:", err)
    });

module.exports = sequelize;
