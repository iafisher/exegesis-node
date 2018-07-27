const Sequelize = require('sequelize');
const sequelize = require('./init');
const Snippet = require('./snippet');

const Comment = sequelize.define('comment', {
    fullText: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lineNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    snippetID: {
        type: Sequelize.INTEGER,
        references: {
            model: Snippet,
            key: 'id',
        }
    }
});

module.exports = Comment;
