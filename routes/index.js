var express = require('express');
var Prism = require('prismjs');
var loadLanguages = require('prismjs/components/');
loadLanguages(['python']);

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // Might be better to do this on the front-end.
    const code = 'def foo(x):\n    return x + 1'
    const html = Prism.highlight(code, Prism.languages.python, 'python');
    res.render('index', { title: 'Express', code: html });
});

module.exports = router;
