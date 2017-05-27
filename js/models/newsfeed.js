(function(exports){

function Newsfeed(guardianResponse) {
  this.headlines = guardianResponse[0].response.results;
}

Newsfeed.prototype.getHeadlines = function() {
  return this.headlines;
};


Newsfeed.prototype.getUrl = function(index){
  return this.headlines[index].webUrl;
};

exports.Newsfeed = Newsfeed;
})(this);
