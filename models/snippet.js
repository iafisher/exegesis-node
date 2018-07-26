// Courtesy of https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SnippetSchema = new Schema(
    {
        full_text: {type: String, required: true},
    }
)

// TODO: Define a virtual for snippet URL

module.exports = mongoose.model('Snippet', SnippetSchema)
