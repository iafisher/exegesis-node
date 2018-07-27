const Sequelize = require('sequelize');
const sequelize = require('./init');

const Snippet = sequelize.define('snippet', {
    fullText: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    path: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
});

// sequelize.sync()
//     .then(() => Snippet.create({
//             fullText: 'def foo(x):\n    return x + 1',
//             path: 'foo.py',
//     }))
//     .then(snip => {
//         console.log(snip.toJSON());
//     })

module.exports = Snippet;
