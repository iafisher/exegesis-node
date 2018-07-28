var express = require('express');
var router = express.Router();

router.get('/snippets/:snippetPath', function(req, res, next) {
    res.render('snippet');
});

module.exports = router;
