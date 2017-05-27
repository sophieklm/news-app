(function(exports) {
  function View(newsfeed) {
    this.newsfeed = newsfeed;
  }

  View.prototype.getHTML = function(guardianResponse) {
    string = "";
    counter = 0;
    this.newsfeed.getHeadlines().forEach(function(item){
      image = item.fields.thumbnail;
      string += `<li><img src='${image}'><div><a href='javascript:showSummary(${counter})'>` + item.webTitle + "</a></div></li>";
      counter ++;
    });
      return "<ul class='list-unstyled'>" + string + "</ul>";
  };

   exports.View = View;
})(this);
