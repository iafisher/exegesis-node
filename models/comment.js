var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema(
    {
        full_text: {type: String, required: true},
        snippet: {type: Schema.Types.ObjectId, ref: 'Snippet', required: true},
        lineno: {type: Number, required: true},
    }
)

module.exports = mongoose.model('Comment', CommentSchema)
