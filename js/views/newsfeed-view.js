(function(exports) {
  function View(newsfeed) {
    this.newsfeed = newsfeed;
  }

  View.prototype.getHTML = function(guardianResponse) {
    string = "";
    counter = 0;
    this.newsfeed.getHeadlines().forEach(function(item){
      string += `<li><div><a href='javascript:showSummary(${counter})'>` + item.webTitle + "</a></div></li>";
      counter ++;
    });
      return "<ul>" + string + "</ul>";
  };

   exports.View = View;
})(this);
