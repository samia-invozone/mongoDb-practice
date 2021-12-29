const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }] },{ timestamps: true });

const commentSchema = Schema({
  blog: { type: Schema.Types.ObjectId, ref: 'Blog' },
  description: String,
});

const Blog = mongoose.model('Blog', blogSchema);
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Blog;