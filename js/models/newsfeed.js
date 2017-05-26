(function(exports){

function Newsfeed() {
  this.headlines = [];
}

Newsfeed.prototype.getHeadlines = function() {
  return this.headlines;
};

Newsfeed.prototype.addHeadlines = function(guardianResponse) {
  this.headlines = guardianResponse[0].response.results;
};

exports.Newsfeed = Newsfeed;
})(this);
