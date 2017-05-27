(function(exports){

function Controller(guardianResponse) {
  this.newsfeed = new Newsfeed(guardianResponse);
  this.view = new View(this.newsfeed);
}

Controller.prototype.populatePage = function() {
  element = document.getElementById("headlines");
  element.innerHTML = this.view.getHTML(this.newsfeed);
};

exports.Controller = Controller;
})(this);


function showSummary(id) {
  var article = new Article(id);
  setTimeout(function() {
    var summaryview = new SummaryView(article);
    element = document.getElementById('summary');
    element.innerHTML = summaryview.getSummaryHTML();
  },2500);
}
