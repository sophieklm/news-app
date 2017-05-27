(function(exports){

function Article(id) {
  this.summary = getResponse(getSummary(id));
}

Article.prototype.getSummary = function() {
  return this.summary;
};

exports.Article = Article;
})(this);
