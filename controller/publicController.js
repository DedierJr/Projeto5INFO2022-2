const Post = require('../model/Post');

function abreindex(req,res){
    Post.find({}).populate('usuario').exec(function(err,posts){
        res.render('public/index',{Posts:posts})
    })
}

exports.renderTimeline = (req, res) => {
    res.render('timeline');
};
  

module.exports = {
    abreindex 
}

module.exports = {
    renderTimeline
}