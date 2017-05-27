(function(exports) {
  'use strict';

  function SummaryView(article){
    this.article = article;
    this.summary = this.article.getSummary();
  }

  SummaryView.prototype.getSummaryHTML = function() {
    return "<h2>Summary</h2><div>" + this.summary[0].text + "</div>";
  };

  exports.SummaryView = SummaryView;
})(this);
