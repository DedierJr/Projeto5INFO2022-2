const Post = require("../model/Post");

function abreindex(req, res) {
  Post.find({})
    .populate("usuario")
    .exec(function (err, posts) {
      res.render("public/index", { Posts: posts });
    });
}

function renderTimeline(req, res) {
  res.render("timeline");
}

function renderTimeline(req, res) {
  Post.find({})
    .populate("usuario")
    .exec(function (err, posts) {
      res.render("public/timeline", { Posts: posts });
    });
}

module.exports = {
  abreindex,
  renderTimeline,
};
