(function(exports){

function Newsfeed() {
  this.headlines = [];
}

Newsfeed.prototype.getHeadlines = function() {
  return this.headlines;
};

Newsfeed.prototype.addHeadlines = function(response) {
  this.headlines = response;
};

exports.Newsfeed = Newsfeed;
})(this);
