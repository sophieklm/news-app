(function(exports) {
  function View(newsfeed = new Newsfeed()) {
    this.newsfeed = newsfeed;
  }

  View.prototype.getHTML = function(guardianResponse) {
    string = "";
    for (i=0;i<this.newsfeed.getHeadlines(guardianResponse).length; i++){
      string += "<li><div>" + this.newsfeed.getHeadlines(guardianResponse)[i].webTitle + "</div></li>"
    };
      return "<ul>" + string + "</ul>";
  };

   exports.View = View;
})(this);
